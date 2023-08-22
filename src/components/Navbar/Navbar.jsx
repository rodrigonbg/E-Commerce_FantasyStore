import logo from '../../logos/logo-fantasy-white.png'
import './Navbar.scss'

import SearchBar from '../SearchBar/SearchBar'
import Cart_Icon from '../Cart_Icon/Cart_Icon'


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
                <div>
                    <button type="button" className="btn btn-secondary header__dropdownMenu" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <i id="menu" className="fa-solid fa-bars fa-2x"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start header__dropdownMenu__nav">
                        <li>
                            <a href="index.html">
                                <button id="selected" className="dropdown-item header__dropdownMenu__nav__linkBtn" type="button">Inicio</button>
                            </a>
                        </li>

                        <li>
                            <a href="Pages/Furnitures.html">
                                <button className="dropdown-item header__dropdownMenu__nav__linkBtn" type="button">Furnitures</button>
                            </a>
                        </li>

                        <li>
                            <a href="Pages/Sobre-nosotros.html">
                                <button className="dropdown-item header__dropdownMenu__nav__linkBtn" type="button">Sobre nosotros</button>
                            </a>
                        </li>

                        <li>
                            <a href="Pages/Ayuda.html">
                                <button className="dropdown-item header__dropdownMenu__nav__linkBtn" type="button">Ayuda</button>
                            </a>
                        </li>

                        <li>
                            <a href="Pages/Contacto.html">
                                <button className="dropdown-item header__dropdownMenu__nav__linkBtn" type="button">Contacto</button>
                            </a>
                        </li>

                        <li>
                            <button className="dropdown-item header__dropdownMenu__nav__loginBtn" type="button">LOGIN</button>
                        </li>
                    </ul>
                </div>

                {/* login */}
                <input  className="header__loginButton" type="button" value="Login" />
            </span>
        </section>

    )
}

export default Navbar