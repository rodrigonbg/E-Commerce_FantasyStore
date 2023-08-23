import "bootstrap"
import './DropdownMenu.scss'
import LoginButton from "../LoginButton/LoginButton"


export const Buttom_ListItem = (props) => {
  return (
    <li>
        <a href={props.href}>
            <button id={props.id} className="dropdown-item dropdownMenu_linkBtn" type="button">{props.text}</button>
        </a>
    </li>
  )
}

const DropdownMenu = (props) => {
  return (
        <div>
            <button type="button" className="btn btn-secondary dropdownMenu_Icon" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                <i id="menu" className="fa-solid fa-bars fa-2x"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dropdownMenu_Ul">
                <Buttom_ListItem text="HomePage" href="index.html" id={props.index} />
                <Buttom_ListItem text="Furnitures" href="Pages/Furnitures.html" id={props.furnitures} />
                <Buttom_ListItem text="About Us" href="Pages/Sobre-nosotros.html" id={props.aboutUs} />
                <Buttom_ListItem text="Help" href="Pages/Ayuda.html" id={props.help} />
                <Buttom_ListItem text="Cantact" href="Pages/Contacto.html" id={props.contact} />
                <li>
                    <LoginButton className="dropdown-item dropdownMenu_loginBtn"/>
                </li>
            </ul>
        </div>
  )
}

export default DropdownMenu