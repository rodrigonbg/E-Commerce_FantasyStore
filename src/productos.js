import { collection, addDoc, setDoc, doc} from "firebase/firestore" 
import { db } from "./services/config"
const products = [
    {
        id: 1,
        nombre: "Maceta",
        descripcion: "Juego de 3 elegantes macetas de metal negro, con un diámetro de 20, 25 y 30 cm y una altura de 18, 30, 40 cm respectivamente. Su acabado mate le da un toque moderno y su diseño cubico es ideal para una variedad de plantas. Además, cuenta con un orificio de drenaje en la parte inferior para mantener tus plantas saludables.",
        categoria:"living",
        idCategoria: 2,
        img: "../Imagenes/Productos/Ofertas/MacetasNegras.jpg",
        precio: 1000,
        onSale: true,
        descuento: 50,
        stock: 100,
        alt: "Macetas negras",
        cantiadadEnCarrito: 0
    },
    {
        id: 2,
        nombre: "Maceta",
        descripcion: "Maceta de cerámica tiene un diseño redondo con un diámetro de 25 cm y una altura de 20 cm, lo que la hace perfecta para plantas de tamaño medio. Su esmalte blanco le proporciona un aspecto moderno y sofisticado que se adapta a cualquier decoración. La base de metal negro agrega un toque de estilo adicional, elevando la maceta de manera elegante y garantizando una base estable.",
        categoria:"living",
        idCategoria: 2,
        img: "../Imagenes/Productos/Ofertas/MacetasBlancas.jpg",
        precio: 1000,
        onSale: true,
        descuento: 30,
        stock: 120,
        alt: "Macetas blancas",
        cantiadadEnCarrito: 0
    },
    {
        id: 3,
        nombre: "Mesita",
        descripcion: "Mesita fabricada con madera maciza de roble, que le confiere un aspecto natural y rústico. Tiene un tamaño perfecto, con un tablero cuadrado de 60 cm de lado y una altura de 50 cm, ideal para colocarla junto a la cama o en cualquier rincón de tu hogar. Las cuatro patas metálicas en color negro le otorgan un toque contemporáneo y aseguran una base estable",
        categoria:"dormitorio",
        idCategoria: 1,
        img: "../Imagenes/Productos/Ofertas/Mesita.jpg",
        precio: 1699,
        onSale: true,
        descuento: 29,
        stock: 15,
        alt: "Mesita de madera",
        cantiadadEnCarrito: 0
    },
    {
        id: 4,
        nombre: "Biblioteca",
        descripcion: "Esta biblioteca combina un cuerpo de madera cálido con tres cajones negros para almacenamiento adicional. Descansa sobre patas de madera marrón que le proporcionan un toque de estilo y elevación. Con 180 cm de altura y 80 cm de ancho, es una pieza versátil y elegante para tu hogar.",
        categoria:"oficina",
        idCategoria: 3,
        img: "../Imagenes/Productos/Ofertas/Estantería.png",
        precio: 1999,
        onSale: true,
        descuento: 29,
        stock: 80,
        alt: "biblioteca",
        cantiadadEnCarrito: 0
    },
    {
        id: 5,
        nombre: "Estantería",
        descripcion: "Esta estantería ofrece un equilibrio perfecto entre almacenamiento y estilo. Su estructura de madera natural agrega un toque cálido y rústico a tu espacio. Con una altura de 160 cm y un ancho de 90 cm, proporciona suficiente espacio para tus libros y objetos decorativos en sus estantes abiertos. En la parte inferior, cuenta con un cajón blanco que brinda un espacio oculto para guardar artículos de manera organizada. El contraste entre el cajón blanco y la madera natural crea un atractivo visual moderno y fresco.",
        categoria:"oficina",
        idCategoria: 3,
        img: "../Imagenes/Productos/Ofertas/estanteria2.png",
        precio: 1899,
        onSale: true,
        descuento: 29,
        stock: 15,
        alt: "Estantería",
        cantiadadEnCarrito: 0
    },
    {
        id: 6,
        nombre: "Sofa un cuerpo",
        descripcion: "Este sofá de diseño contemporáneo es una pieza elegante y versátil para cualquier espacio de tu hogar. Su tapizado en blanco le confiere un aspecto limpio y luminoso que se adapta a una variedad de estilos de decoración. Con un solo cuerpo y un ancho de 180 cm, ofrece un asiento espacioso para una o dos personas. Las patas de madera maciza en tono natural le añaden un toque de calidez y durabilidad al sofá, elevándolo del suelo de manera elegante. La combinación de la simplicidad del blanco y la textura natural de la madera crea una estética equilibrada y moderna. Este sofá es el lugar perfecto para relajarte y añadir un elemento de diseño a tu hogar.",
        categoria:"comedor",
        idCategoria: 4,
        img: "../Imagenes/Productos/Ofertas/Sofa.png",
        precio: 6500,
        onSale: true,
        descuento: 20,
        stock: 10,
        alt: "Sofa de un cuerpo",
        cantiadadEnCarrito: 0
    },
    {
        id: 8,
        nombre: "Boxes decoración",
        descripcion: "Estas boxes blancas y marrones son una adición perfecta para tu decoración, ofreciendo tanto estilo como funcionalidad. Su diseño simple y moderno presenta un contraste atractivo entre los acabados blancos y marrones. Las cajas son versátiles y pueden utilizarse como estantes para exhibir objetos decorativos, almacenar artículos pequeños o mantener el orden en tu espacio. El blanco aporta un toque de luminosidad y limpieza, mientras que el marrón agrega calidez y un aspecto natural. Las cajas están construidas con materiales duraderos y son una solución práctica para mantener tu hogar organizado y con estilo. Con estas cajas, puedes lograr un equilibrio armonioso entre decoración y funcionalidad en tu espacio.",
        categoria:"oficina",
        idCategoria: 3,
        img: "../Imagenes/Productos/Ofertas/Boxes.jpg",
        precio: 2599,
        onSale: true,
        descuento: 15,
        stock: 100,
        alt: "Boxes de decoración",
        cantiadadEnCarrito: 0
    },
    {
        id: 7,
        nombre: "Lampara de pie",
        descripcion: "Esta lámpara de pie combina la elegancia del blanco con la solidez del metal en un diseño contemporáneo. La pantalla blanca de la lámpara irradia una luz suave y cálida que ilumina tu espacio de manera acogedora. La base de metal proporciona estabilidad y contraste visual, lo que hace que esta lámpara sea tanto funcional como un elemento decorativo en tu hogar. Con su altura de 160 cm, esta lámpara de pie es ideal para proporcionar iluminación ambiental en cualquier habitación.",
        categoria:"dormitorio",
        idCategoria: 1,
        img: "../Imagenes/Productos/Ofertas/LamparaDePie.png",
        precio: 1000,
        onSale: true,
        descuento: 5,
        stock: 75,
        alt: "Lampara de pie",
        cantiadadEnCarrito: 0
    },
    {
        id: 9,
        nombre: "Armario",
        descripcion: "Este armario de marrón oscuro es una pieza funcional y elegante para tu hogar. Con tres puertas que se abren hacia espacios de almacenamiento interiores y cuatro compartimentos abiertos, ofrece una solución versátil para organizar tus pertenencias. El marrón oscuro de su acabado le da un aspecto clásico y sofisticado, lo que lo hace adecuado para diversos estilos de decoración. Las tres puertas ocultan amplios espacios de almacenamiento, mientras que los cuatro compartimentos abiertos te permiten exhibir tus objetos decorativos o mantener los elementos esenciales al alcance de la mano.",
        categoria:"dormitorio",
        idCategoria: 1,
        img: "../Imagenes/Productos/Destacados/Armario.png",
        precio: 8990,
        onSale: false,
        descuento: 0,
        stock: 10,
        alt: "Armario de madera",
        cantiadadEnCarrito: 0
    },
    {
        id: 10,
        nombre: "Butaca",
        descripcion: "Esta silla de madera es un ejemplo de simplicidad y elegancia en diseño de mobiliario. Está construida completamente en madera, lo que le confiere un aspecto natural y atemporal. Su diseño ergonómico y respaldo ligeramente curvado proporcionan comodidad mientras se adapta fácilmente a diversas decoraciones de interiores. La madera utilizada es resistente y duradera, asegurando una larga vida útil para la silla. Su versatilidad la hace adecuada tanto para uso en interiores como exteriores, en comedores, salas de estar o áreas al aire libre.",
        categoria:"comedor",
        idCategoria: 4,
        img: "../Imagenes/Productos/Destacados/Butaca.png",
        precio: 1000,
        onSale: false,
        descuento: 0,
        stock: 18,
        alt: "Butaca de madera",
        cantiadadEnCarrito: 0
    },
    {
        id: 11,
        nombre: "Monstera",
        descripcion: "Planta de interior apreciada por su distintivo aspecto tropical y facilidad de cuidado. Sus hojas grandes, de un verde profundo, están perforadas con cortes irregulares, lo que le otorga una apariencia única y exótica. Esta planta es originaria de las selvas tropicales de América Central y del Sur, lo que explica su preferencia por la luz indirecta brillante y su resistencia a la sombra parcial. Además, la Monstera es conocida por desarrollar raíces aéreas que pueden trepar o colgar, añadiendo a su atractivo visual.",
        categoria:"comedor",
        idCategoria: 4,
        img: "../Imagenes/Productos/Destacados/Monstera.png",
        precio: 1299,
        onSale: false,
        descuento: 0,
        stock: 620,
        alt: "Planta monstera",
        cantiadadEnCarrito: 0
    },
    {
        id: 12,
        nombre: "Estantería",
        descripcion: "Esta estantería presenta un atractivo contraste entre el marrón y el blanco en su diseño. La estructura marrón oscuro ofrece una sensación de solidez y calidez, mientras que los estantes en blanco brindan un toque de luminosidad y modernidad. Con sus líneas limpias y diseño minimalista, esta estantería se adapta perfectamente a una variedad de estilos de decoración. Ofrece amplio espacio para exhibir tus libros, objetos decorativos o colecciones personales, lo que la convierte en una pieza funcional y decorativa para tu hogar. Esta estantería bicolor es una elección elegante y versátil para añadir un toque de elegancia a tu espacio.",
        categoria:"oficina",
        idCategoria: 3,
        img: "../Imagenes/Productos/Destacados/Estanteria.png",
        precio: 1999,
        onSale: false,
        descuento: 0,
        stock: 321,
        alt: "Estantería de madera",
        cantiadadEnCarrito: 0
    },
    {
        id: 13,
        nombre: "Mesita",
        descripcion: "Esta mesita redonda es una mezcla perfecta de estilo y calidez. Su superficie blanca le confiere un aspecto limpio y luminoso, mientras que las patas de madera natural aportan un toque de naturalidad y elegancia. Con un diseño clásico y funcional, esta mesita es versátil y encaja en una variedad de espacios. Su forma redonda la hace ideal para acompañar un sofá o una silla, proporcionando un lugar conveniente para colocar tus bebidas, libros o elementos decorativos. Esta mesita es la elección perfecta para añadir un toque de frescura y calidez a tu espacio.",
        categoria:"dormitorio",
        idCategoria: 1,
        img: "../Imagenes/Productos/Destacados/Mesita.png",
        precio: 2599,
        onSale: false,
        descuento: 0,
        stock: 32,
        alt: "Mesita",
        cantiadadEnCarrito: 0
    },
    {
        id: 14,
        nombre: "Planta de plastico",
        descripcion: "Una planta de plástico decorativa es una representación artificial de la naturaleza. A menudo, se modela con gran detalle para imitar una planta real específica, como un helecho, una palma o una suculenta. Estas plantas se crean con hojas de plástico o tela y a menudo están montadas en una base de plástico o cerámica que simula tierra o maceta. La ventaja de una planta de plástico es que no requiere cuidado continuo como una planta real. No necesita luz, agua ni mantenimiento, lo que la convierte en una excelente opción para quienes desean la belleza de las plantas en su hogar u oficina sin la responsabilidad del cuidado. Además, estas plantas son duraderas y conservarán su aspecto atractivo durante mucho tiempo.",
        categoria:"living",
        idCategoria: 2,
        img: "../Imagenes/Productos/Destacados/Planta.png",
        precio: 999,
        onSale: false,
        descuento: 0,
        stock: 156,
        alt: "Planta"
    },
    {
        id: 15,
        nombre: "Estantería",
        descripcion: "Estos estantes son un ejemplo de diseño funcional y moderno. Los estantes están hechos de madera maciza, lo que aporta calidez y un aspecto natural, perfecto para exhibir tus objetos decorativos favoritos, libros o colecciones. Los estantes son lo suficientemente resistentes como para sostener tus pertenencias con seguridad. El marco de metal negro que rodea los estantes agrega un toque de elegancia y durabilidad. Este marco de metal no solo proporciona estabilidad, sino que también crea un contraste visual atractivo con la madera, creando un aspecto contemporáneo y versátil.",
        categoria:"oficina",
        idCategoria: 3,
        img: "../Imagenes/Productos/Destacados/Rack-estanteria.png",
        precio: 2599,
        onSale: false,
        descuento: 0,
        stock: 10,
        alt: "Estantería",
        cantiadadEnCarrito: 0
    },
    {
        id: 16,
        nombre: "Mesa de madera",
        descripcion: "Este juego de mesa es una combinación perfecta de estilo y funcionalidad para tu comedor. La mesa está hecha de madera maciza de alta calidad, lo que le confiere una sensación de calidez y durabilidad. Su diseño es atemporal, con líneas limpias y una superficie amplia que puede acomodar cómodamente a cuatro personas. Las cuatro sillas a juego están igualmente construidas en madera maciza, proporcionando comodidad y solidez. Sus asientos y respaldos están diseñados ergonómicamente para garantizar la comodidad durante las comidas. El conjunto completo irradia elegancia y es adecuado para una variedad de estilos de decoración, desde rústico hasta contemporáneo. Ya sea para cenas familiares o reuniones con amigos, este juego de mesa con cuatro sillas de madera es una elección clásica y funcional que realza la decoración de tu comedor y brinda un lugar cómodo para disfrutar de tus comidas.",
        categoria:"comedor",
        idCategoria: 4,
        img: "../Imagenes/Productos/Destacados/Mesa.png",
        precio: 15999,
        onSale: false,
        descuento: 0,
        stock: 6,
        alt: "Mesa de madera",
        cantiadadEnCarrito: 0
    },
    {
        id: 17,
        nombre: "Cajonera",
        descripcion: "Esta mesa de luz de lujo es una obra maestra de elegancia y funcionalidad. Su diseño se distingue por una superficie lujosa en madera oscura que irradia sofisticación. Lo que realmente destaca en esta mesa de luz son los cuatro cajones de madera oscura que ofrecen un amplio espacio de almacenamiento para tus objetos personales y elementos de cabecera. Estos cajones son ideales para guardar libros, dispositivos electrónicos, o cualquier cosa que desees tener a mano en tu dormitorio.",
        categoria:"dormitorio",
        idCategoria: 1,
        img: "../Imagenes/Productos/Destacados/Cajonera.png",
        precio: 3699,
        onSale: false,
        descuento: 0,
        stock: 10,
        alt: "Cajonera",
        cantiadadEnCarrito: 0
    }
]

/* Funcion para retornar una promesa con todos los productos del array */
export function getProducts (){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(products)
            reject('Hubo un error :( con la BD')
        }, 1000)
    })
}

/* Funcion para retornar una promesa con un solo producto del array a partir de su ID */
export const getProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products.find((product)=> product.id === id)) /* Encuentro el prod con find y lo retorno en una promesa */
            reject('Hubo un error :( con la BD')
        }, 500)
    })
}



/* Funcion para retornar una promesa con productos por categoría */
export const getProductsByCategory = (idCategory)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products.filter((prod)=> prod.idCategoria === idCategory))
            reject('Hubo un error :( con la BD')
        },1000)
    })
}



export function cargarDatos(){
    products.map(prod => {
        setDoc(doc(db, "productos", `${prod.id}`), {
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            categoria: prod.categoria,
            idCategoria: prod.idCategoria,
            img: prod.img,
            precio: prod.precio,
            onSale: prod.onSale,
            descuento: prod.descuento,
            stock: prod.stock,
            alt: prod.alt
        })
    })
}

