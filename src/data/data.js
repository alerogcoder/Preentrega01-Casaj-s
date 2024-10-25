const products = [
    {
        id: "ng1111",
        name: "Nigiri de salmón",
        description: "Un clásico sushi con una loncha de salmón fresco sobre arroz sazonado.",
        stock: 10,
        quantity: 2,
        price: 2000,
        image: "/img/salmonnigiri.webp",
        category: "nigiri"
    },
    {
        id: "ng1212",
        name: "Nigiri de atún",
        description: "Pieza de arroz cubierta con atún fresco, ideal para los amantes del mar.",
        stock: 2,
        quantity: 2,
        price: 1000,
        image: "/img/tunanigiri.webp",
        category: "nigiri"
    },
    {
        id: "mk1313",
        name: "Maki de pepino",
        description: "Rollo de alga y arroz relleno de crujiente pepino, ligero y refrescante.",
        stock: 15,
        quantity: 8,
        price: 800,
        image: "/img/pepinomaki.webp",
        category: "maki"
    },
    {
        id: "mk1414",
        name: "Maki de aguacate",
        description: "Delicioso maki con aguacate fresco, envuelto en alga nori y arroz.",
        stock: 8,
        quantity: 8,
        price: 850,
        image: "/img/paltamaki.webp",
        category: "maki"
    },
    {
        id: "sh1515",
        name: "Sashimi de salmón",
        description: "Salmón crudo de primera calidad, cortado en finas láminas.",
        stock: 12,
        quantity: 5,
        price: 2200,
        image: "/img/sashimisalmon.webp",
        category: "sashimi"
    },
    {
        id: "sh1616",
        name: "Sashimi de atún",
        description: "Láminas de atún fresco, perfectas para disfrutar del sabor puro del mar.",
        stock: 5,
        quantity: 5,
        price: 2300,
        image: "/img/sashimiatun.webp",
        category: "sashimi"
    },
    {
        id: "tm1717",
        name: "Temaki de cangrejo",
        description: "Cono de alga nori relleno de arroz y suculento cangrejo.",
        stock: 7,
        quantity: 1,
        price: 1500,
        image: "/img/temakicangrejo.webp",
        category: "temaki"
    },
    {
        id: "tm1818",
        name: "Temaki de bacalao",
        description: "Sabroso temaki relleno de bacalao a la parrilla con salsa dulce.",
        stock: 6,
        quantity: 1,
        price: 1700,
        image: "/img/temakibacalao.webp",
        category: "temaki"
    },
    {
        id: "pk1919",
        name: "Pollo katsu",
        description: "Rollo relleno de crujiente pollo empanado estilo katsu, combinado con una suave capa de arroz y alga nori.",
        stock: 9,
        quantity: 4,
        price: 1800,
        image: "/img/katsupollo.webp",
        category: "roll"
    },
    {
        id: "cc2020",
        name: "Crunchy california",
        description: "Delicioso rollo de arroz relleno de aguacate, surimi y pepino, cubierto con tempura crujiente para darle un toque extra de textura.",
        stock: 4,
        quantity: 4,
        price: 1900,
        image: "/img/crunchycalifornia.webp",
        category: "roll"
    },
    {
        id: "ps2121",
        name: "Mochis de chocolate",
        description: "Dulce y suave mochi relleno de cremoso chocolate, ideal para los amantes de lo dulce.",
        stock: 3,
        quantity: 2,
        price: 1200,
        image: "/img/mochichoco.webp",
        category: "postre"
    },
    {
        id: "ps2222",
        name: "Mochis de fresa y cheesecake",
        description: "Delicado mochi con un suave relleno de fresa, una combinación perfecta de textura y frescura.",
        stock: 2,
        quantity: 2,
        price: 1300,
        image: "/img/mochifresa.webp",
        category: "postre"
    }
]


const getProducts = () => {
    return new Promise((resolve, reject)=> {
        setTimeout( ()=> {
            resolve(products)
        }, 1000)
    })
}

export { getProducts }