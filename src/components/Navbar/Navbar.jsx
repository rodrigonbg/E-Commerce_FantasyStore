import logo from '../../logos/logo-fantasy-white.png'
import './Navbar.scss'

import SearchBar from '../SearchBar/SearchBar'
import Cart_Icon from '../Cart_Icon/Cart_Icon'
import DropdownMenu from '../DropdownMenu/DropdownMenu'


const Navbar = () => {
    return(
        <section className="navbarContainer">
            <a href="index.html">
                <img className="navbar_logo" src={logo} alt="Logotipo" />
            </a>

            <span className="navbarTools">
                <nav className="navbar_itemsContainer">
                    <ul>{/* Barra de navegacíon */}
                        <li className="navbar_item" ><a id="selected" href="index.html">Inicio</a></li>
                        <li className="navbar_item" ><a href="Pages/Furnitures.html">Furnitures</a></li>
                        <li className="navbar_item" ><a href="Pages/Sobre-nosotros.html">Sobre nosotros</a></li>
                        <li className="navbar_item" ><a href="Pages/Ayuda.html">Ayuda</a></li>
                        <li className="navbar_item" ><a href="Pages/Contacto.html">Contacto</a></li>
                    </ul>
                </nav>

                <SearchBar />

                {/* Boton del Buscador */}
                <input className="SearchBar_Button" type="button" value="buscar" />

                <Cart_Icon />

                {/* Boton de menú */}
                <DropdownMenu />

                {/* login */}
                <input  className="header__loginButton" type="button" value="Login" />
            </span>
        </section>

    )
}

export default Navbar