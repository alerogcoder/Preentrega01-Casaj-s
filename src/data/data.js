const products = [
    {
        id: "ng1111",
        name: "Nigiri de salmón",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor lobortis. Pellentesque eu est a nulla placerat dignissim. Morbi a enim in magna semper bibendum. Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi.",
        stock: 10,
        price: 2000,
        image: "/img/tiposushi1.png",
        category: "nigiri"
    },
    {
        id: "ng1212",
        name: "Nigiri de atún",
        description: "",
        stock: 2,
        price: 1000,
        image: "/img/tiposushi2.png",
        category: "nigiri"
    },
    {
        id: "mk1313",
        name: "Maki de pepino",
        description: "",
        stock: 15,
        price: 800,
        image: "/img/tiposushi3.png",
        category: "maki"
    },
    {
        id: "mk1414",
        name: "Maki de aguacate",
        description: "",
        stock: 8,
        price: 850,
        image: "/img/tiposushi4.png",
        category: "maki"
    },
    {
        id: "sh1515",
        name: "Sashimi de salmón",
        description: "",
        stock: 12,
        price: 2200,
        image: "/img/tiposushi5.png",
        category: "sashimi"
    },
    {
        id: "sh1616",
        name: "Sashimi de atún",
        description: "",
        stock: 5,
        price: 2300,
        image: "/img/tiposushi6.png",
        category: "sashimi"
    },
    {
        id: "tm1717",
        name: "Temaki de cangrejo",
        description: "",
        stock: 7,
        price: 1500,
        image: "/img/tiposushi7.png",
        category: "temaki"
    },
    {
        id: "tm1818",
        name: "Temaki de anguila",
        description: "",
        stock: 6,
        price: 1700,
        image: "/img/tiposushi8.png",
        category: "temaki"
    },
    {
        id: "ur1919",
        name: "Uramaki California",
        description: "",
        stock: 9,
        price: 1800,
        image: "/img/tiposushi9.png",
        category: "uramaki"
    },
    {
        id: "ur2020",
        name: "Uramaki de salmón",
        description: "",
        stock: 4,
        price: 1900,
        image: "/img/tiposushi10.png",
        category: "uramaki"
    },
    {
        id: "gk2121",
        name: "Gunkan de salmón",
        description: "",
        stock: 3,
        price: 1200,
        image: "/img/tiposushi11.png",
        category: "gunkan"
    },
    {
        id: "gk2222",
        name: "Gunkan de huevas",
        description: "",
        stock: 2,
        price: 1300,
        image: "/img/tiposushi12.png",
        category: "gunkan"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject)=> {
        setTimeout( ()=> {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }