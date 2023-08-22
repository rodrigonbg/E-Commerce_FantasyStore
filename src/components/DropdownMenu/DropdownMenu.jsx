import "bootstrap"
import './DropdownMenu.scss'

const DropdownMenu = () => {
  return (
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
  )
}

export default DropdownMenu