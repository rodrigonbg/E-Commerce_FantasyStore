import logo from '../../logos/logo-fantasy-white.png'
import './Navbar.scss'

import SearchBar from '../SearchBar/SearchBar'
import Cart_Icon from '../Cart_Icon/Cart_Icon'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import ListItem from '../ListItem/ListItem'
import LoginButton from '../LoginButton/LoginButton'


const Navbar = (props) => {
    
    return(
        <section className="navbarContainer">
            <a href="index.html">
                <img className="navbar_logo" src={logo} alt="Logotipo" />
            </a>

            <span className="navbarTools">
                <nav className="navbar_itemsContainer">
                    <ul>{/* Barra de navegacíon */}
                        <ListItem href="index.html" text="Homepage" id={props.index}/>
                        <ListItem href="Pages/Furnitures.html" text="Furnitures" id={props.furnitures} />
                        <ListItem href="Pages/Sobre-nosotros.html" text="About Us" id={props.aboutUs} />
                        <ListItem href="Pages/Ayuda.html" text="Help" id={props.help} />
                        <ListItem href="Pages/Contacto.html" text="Contact" id={props.contact} />
                    </ul>
                </nav>

                <SearchBar />

                {/* Boton del Buscador */}
                <input className="SearchBar_Button" type="button" value="buscar" />

                <Cart_Icon />

                {/* Boton de menú */}
                <DropdownMenu index="selected" />

                {/* login */}
                <LoginButton className="loginButton"/>
            </span>
        </section>

    )
}

export default Navbar