import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        id: "ng1111",
        name: "Nigiri de salmón",
        description: "Un clásico sushi con una loncha de salmón fresco sobre arroz sazonado.",
        stock: 25,
        cantidad: 2,
        price: 4.90,
        image: ["/img/salmonnigiri.webp", "/img/salmonnigiri2.webp"],
        category: "nigiri"
    },
    {
        id: "ng1212",
        name: "Nigiri de atún",
        description: "Pieza de arroz cubierta con atún fresco, ideal para los amantes del mar.",
        stock: 30,
        cantidad: 2,
        price: 5.50,
        image: ["/img/tunanigiri.webp", "/img/tunanigiri2.webp"],
        category: "nigiri"
    },
    {
        id: "mk1313",
        name: "Maki de pepino",
        description: "Rollo de alga y arroz relleno de crujiente pepino, ligero y refrescante.",
        stock: 20,
        cantidad: 8,
        price: 3.50,
        image: ["/img/pepinomaki.webp", "/img/pepinomaki2.webp"],
        category: "maki"
    },
    {
        id: "mk1414",
        name: "Maki de aguacate",
        description: "Delicioso maki con aguacate fresco, envuelto en alga nori y arroz.",
        stock: 18,
        cantidad: 8,
        price: 3.90,
        image: ["/img/paltamaki.webp", "/img/paltamaki2.webp"],
        category: "maki"
    },
    {
        id: "sh1515",
        name: "Sashimi de salmón",
        description: "Salmón crudo de primera calidad, cortado en finas láminas.",
        stock: 22,
        cantidad: 5,
        price: 6.00,
        image: ["/img/sashimisalmon.webp", "/img/sashimisalmon2.webp"],
        category: "sashimi"
    },
    {
        id: "sh1616",
        name: "Sashimi de atún",
        description: "Láminas de atún fresco, perfectas para disfrutar del sabor puro del mar.",
        stock: 15,
        cantidad: 5,
        price: 6.50,
        image: ["/img/sashimiatun.webp", "/img/sashimiatun2.webp"],
        category: "sashimi"
    },
    {
        id: "tm1717",
        name: "Temaki de cangrejo",
        description: "Cono de alga nori relleno de arroz y suculento cangrejo.",
        stock: 19,
        cantidad: 1,
        price: 5.40,
        image: ["/img/temakicangrejo.webp", "/img/temakicangrejo2.webp"],
        category: "temaki"
    },
    {
        id: "tm1818",
        name: "Temaki de bacalao",
        description: "Sabroso temaki relleno de bacalao a la parrilla con salsa dulce.",
        stock: 17,
        cantidad: 1,
        price: 5.80,
        image: ["/img/temakibacalao.webp", "/img/temakibacalao2.png"],
        category: "temaki"
    },
    {
        id: "pk1919",
        name: "Pollo katsu",
        description: "Rollo relleno de crujiente pollo empanado estilo katsu, combinado con una suave capa de arroz y alga nori.",
        stock: 16,
        cantidad: 4,
        price: 6.20,
        image: ["/img/katsupollo.webp", "/img/katsupollo2.webp"],
        category: "roll"
    },
    {
        id: "cc2020",
        name: "Crunchy california",
        description: "Delicioso rollo de arroz relleno de aguacate, surimi y pepino, cubierto con tempura crujiente para darle un toque extra de textura.",
        stock: 15,
        cantidad: 4,
        price: 6.50,
        image: ["/img/crunchycalifornia.webp", "/img/crunchycalifornia2.webp"],
        category: "roll"
    },
    {
        id: "ps2121",
        name: "Mochis de chocolate",
        description: "Dulce y suave mochi relleno de cremoso chocolate, ideal para los amantes de lo dulce.",
        stock: 21,
        cantidad: 2,
        price: 3.20,
        image: ["/img/mochichoco.webp", "/img/mochichoco2.webp"],
        category: "postre"
    },
    {
        id: "ps2222",
        name: "Mochis de fresa y cheesecake",
        description: "Delicado mochi con un suave relleno de fresa, una combinación perfecta de textura y frescura.",
        stock: 19,
        cantidad: 2,
        price: 3.50,
        image: ["/img/mochifresa.webp", "/img/mochifresa2.webp"],
        category: "postre"
    }
]


const seedProducts = () => {
    const productsRef = collection (db, "products")
    products.map(( { id, ...dataProduct } ) => {
        addDoc(productsRef, dataProduct)
    })

    console.log("productos subidos")
    return
}

seedProducts()