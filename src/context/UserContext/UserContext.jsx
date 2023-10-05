import { useState, createContext } from "react";
import { collection, addDoc, setDoc, doc, query, getDocs, getDoc, where, limit} from "firebase/firestore" 
import './UserContext.scss'
import { db } from '../../services/config'
import Swal from 'sweetalert2'

export const UserContext = createContext()


export const UserContextProvider = ({children}) => {
    /* usestate para almacentar informacion del cliente logueado */
    const [user, setUser] = useState(localStorage.getItem("usuario")? JSON.parse(localStorage.getItem("usuario")).user : false)
    const [id, setId] = useState(localStorage.getItem("usuario")? JSON.parse(localStorage.getItem("usuario")).id : null)
    const [nombre, setNombre] = useState(localStorage.getItem("usuario")? JSON.parse(localStorage.getItem("usuario")).nombre : null)
    const [apellido, setApellido] = useState(localStorage.getItem("usuario")? JSON.parse(localStorage.getItem("usuario")).apellido : null)
    const [telefono, setTelefono] = useState(localStorage.getItem("usuario")? JSON.parse(localStorage.getItem("usuario")).telefono : null)
    const [correo, setCorreo] = useState(localStorage.getItem("usuario")? JSON.parse(localStorage.getItem("usuario")).correo : null)
    const [fechaNac, setFechaNac] = useState(localStorage.getItem("usuario")? JSON.parse(localStorage.getItem("usuario")).fechaNac : null)
    const [idCompra, setIdCompra] = useState(null)
    
    const updateLocalStorage = () =>{
        const usuario = {
            user: user,
            id: id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            fechaNac: fechaNac
        }
        let usuarioJson = JSON.stringify(usuario)
        localStorage.removeItem('usuario')
        localStorage.setItem('usuario', usuarioJson)
    }

    const uploadUser = (user) =>{
        addDoc(collection(db, 'usuarios'),{
            nombre: user.nombre,
            apellido: user.apellido,
            telefono: user.telefono,
            correo: user.correo,
            fechaNac: user.fechaNac,
            contraseña: user.contraseña
        })
        .then((userRef) => {
            setId(userRef.id)
            Swal.fire({
                icon: 'success',
                title: 'Usuario Registrado con exito!',    
                showConfirmButton:false,
                timer: 2000,
                customClass: {
                    title: "titleText",  
                }
            })
        })
        .catch(()=>{
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar el ususario',    
                showConfirmButton:false,
                timer: 2000,
                customClass: {
                    title: "titleText",  
                }
            })
        })
    }

    const logIn = (user) => {
        setUser(true)
        setNombre(user.nombre)
        setApellido(user.apellido)
        setTelefono(user.telefono)
        setCorreo(user.correo)
        setFechaNac(user.fechaNac)
        updateLocalStorage()
    }

    const logOut = () => {
        Swal.fire({
            icon: 'question',
            title: '¿Seguro que desea cerrar sesión?',
            showDenyButton: true,    
            confirmButtonText: 'Aceptar',
            denyButtonText: 'Cancelar',
            customClass: {
                confirmButton:"btnConfirm",
                denyButton: "btnDeny",
                icon: "iconQuestion",
                title: "titleText",  
            }
        })
        .then((res)=>{
            if (res.isConfirmed){
                setUser(false)
                setId (null)
                setNombre(null)
                setApellido(null)
                setTelefono(null)
                setCorreo(null)
                setFechaNac(null)  
                updateLocalStorage()
            }
        })

    }

    const findUser = async (mail, pass) => {
        const user =    query(collection(db, 'usuarios'),
                        where('correo', '==', `${mail}`),
                        where('contraseña', '==', `${pass}`),
                        limit(1))

        await getDocs(user)
            .then((user)=>{
                if(user.size !== 0){
                    user.forEach((doc)=>{
                        const idnum = doc.id
                        const user = doc.data()
                        logIn(user)
                        setId(idnum)
                        Swal.fire({
                            icon: 'success',
                            title: 'usuario Logueado',    
                            showConfirmButton:false,
                            timer: 2000,
                            customClass: {
                                title: "titleText",  
                            }
                        })
                    })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Usuario no encontrado',    
                        showConfirmButton:false,
                        timer: 2000,
                        customClass: {
                            title: "titleText",  
                        }
                    })
                }
            })
            .catch((error)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error',    
                    showConfirmButton:false,
                    timer: 2000,
                    customClass: {
                        title: "titleText",  
                    }
                })
            })
    }   

    const singUpUser = (user) => {
        /* Lo guardo en la base de datos */
        uploadUser(user)
        /* inicio sesion */
        logIn(user)
    }




    updateLocalStorage()

    return(
        <UserContext.Provider value={{user, id, nombre, apellido, telefono, correo, fechaNac, singUpUser, findUser, logOut }}>
            {children}
        </UserContext.Provider>
    )
    /* En el value enviamos el valor acutal del carrito y los metodos a los componentes de mi app que lo necesiten  */
}