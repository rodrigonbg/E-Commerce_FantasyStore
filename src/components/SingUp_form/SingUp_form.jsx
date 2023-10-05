import './SingUp_form.scss'
import "bootstrap"
import { Children, useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserContext'
import SectionTitleH2 from '../SectionTitleH2/SectionTitleH2'

const SingUp_form = ({children}) => {

    const {singUpUser, user} = useContext(UserContext)

    const [nombre, setNombre] = useState(null)
    const [apellido, setApellido] = useState(null)
    const [telefono, setTelefono] = useState(null)
    const [correo, setCorreo] = useState(null)
    const [confirmacionCorreo, setConfirmacionCorreo] = useState(null)
    const [fechaNac, setFechaNac] = useState(null)
    const [pass, setPass] = useState(null)
    const [confirmacionPass, setConfirmacionPass] = useState(null)
    const [error, setError] = useState(null)

    const handleNombre = (value) =>{
        setNombre(value)
    }
    const handleApellido = (value) =>{
        setApellido(value)
    }
    const handleTelefono = (value) =>{
        setTelefono(value)
    }
    const handleCorreo = (value) =>{
        setCorreo(value)   
    }
    const handleConfirmacionCorreo = (value) =>{
        setConfirmacionCorreo(value)   
    }
    const handleFechaNac = (value) =>{
        setFechaNac(value)
    }
    const handlePass = (value) =>{
        setPass(value)
    }
    const handleConfirmacionPass = (value) =>{
        setConfirmacionPass(value)
    }

    const handleForm =(e)=>{
        e.preventDefault()

        if (!nombre || !apellido || !telefono || !correo || !confirmacionCorreo || !fechaNac || !pass || !confirmacionPass ){
            setError(<p className='errorText'>Ningun campo puede quedar vacio</p>)
        }
        if((nombre && apellido && telefono && correo && fechaNac && pass) && (pass === confirmacionPass) && (correo === confirmacionCorreo)){
            const user = {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                correo: correo,
                fechaNac: fechaNac,
                contraseña: pass,
            }
            singUpUser(user)

            handleNombre (null)
            handleApellido(null) 
            handleTelefono(null)
            handleCorreo(null)
            handleConfirmacionCorreo(null)
            handleFechaNac(null)
            handlePass(null)
            handleConfirmacionPass(null)
        }

    }

  return (

    <div className='singUp_container'>
        
        {children}

        <form onSubmit={(e) => handleForm(e)}>

            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Nombre" onChange={(e) => handleNombre(e.target.value) }/>
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Apellido" onChange={(e) => handleApellido(e.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <input type="date" className="form-control" id="FechaDeNacimiento" onChange={(e) => handleFechaNac(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <input type="number" className="form-control" id="Telefono" placeholder="Telefono" onChange={(e) => handleTelefono(e.target.value)} />    
                </div>
            </div>

            <div className="mb-3">
                <input type="mail" className="form-control" id="Correo" placeholder="Correo Electronico" onChange={(e) => handleCorreo(e.target.value)} />
            </div>

            <div className="mb-3">
                <input type="mail" className="form-control" id="ConfirmacionCorreo" placeholder="Confirmacion de Correo Electronico" onChange={(e) => handleConfirmacionCorreo(e.target.value)} />
                {((correo !== confirmacionCorreo) && (confirmacionCorreo !== null) ) && <p className='errorText'> Los correos deben coincidir </p>}
            </div>

            <div className="row">
                <div className="col-md-6">
                    <input type="password" className="form-control" placeholder="Contraseña" onChange={(e) => handlePass(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <input type="password" className="form-control" placeholder="Confirmar Contraseña" onChange={(e) => handleConfirmacionPass(e.target.value)}/>
                    {((pass !== confirmacionPass) && (confirmacionPass !== null)) && <p className='errorText'> Las contraseñas deben coincidir </p>}
                </div>
            </div>
            {error?. error}

            <button type="submit" className="btn btn-primary" >Registrarte</button>
        </form>
    </div>
  )
}

export default SingUp_form