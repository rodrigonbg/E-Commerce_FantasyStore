import './Header_hompage.scss'
import React from 'react'

const Header_hompage = () => {
  return (
    <section className="header__gridContainer">
            <section className="header__info"> {/* Titulo y parrafo */}
                <h1 className="header__info__tittle">Furniture that everyone Loves</h1>
                <p className="header__info__p">We have 5000+ reviews and our costumers trust on our Furnitures and quality products.</p>
            </section> 

            <section className="header__imgs"> {/* Carrusel del header */}
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="5000">
                        <img className="imgs d-block w-100" src="Imagenes/Carrusel-header/SillonGris.png" alt="Sillon gris"/>
                      </div>
                      <div className="carousel-item" data-bs-interval="5000">
                        <img className="imgs d-block w-100" src="Imagenes/Carrusel-header/SillonBlanco.png" alt="Sillon Blanco"/>
                      </div>
                      <div className="carousel-item" data-bs-interval="5000">
                        <img className="imgs d-block w-100" src="Imagenes/Carrusel-header/SillonGris2.png" alt="Sillon Gris"/>
                      </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
            </section>

            <section className="header__buttons"> {/* Botones buy now, explore */}
                    <input className="header__buyNowButton" type="button" value="Buy Now"/>
                    <input className="header__ExploreButton" type="button" value="Explore"/>
            </section>
        </section>
  )
}

export default Header_hompage