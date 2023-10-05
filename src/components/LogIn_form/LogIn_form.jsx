import './LogIn_form.scss'
import 'bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserContext'

import React from 'react'
import SectionTitleH2 from '../SectionTitleH2/SectionTitleH2'

const LogIn_form = ({children}) => {
  const [correo, setCorreo] = useState(null)
  const [pass, setPass] = useState(null)

  const {findUser} = useContext(UserContext)

  const handleCorreo = (value) =>{
    setCorreo(value)
  }
  const handlePass = (value) =>{
    setPass(value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    findUser(correo, pass)

    handleCorreo(null)
    handlePass(null)
  }

  return (
    <div className='LogIn_container'>

      {children}

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <input type="mail" className="form-control" id="Correo" placeholder="Correo Electronico" onChange={(e) => handleCorreo(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="Correo" placeholder="Contraseña" onChange={(e) => handlePass(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" >Iniciar Sesion</button>
        {/* <p>Si aun no tenes cuenta, clik <Link>aqui</Link> para registrarte</p> */}
      </form>
    </div>
  )
}

export default LogIn_form