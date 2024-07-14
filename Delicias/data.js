const stores = [
  {
    storeName: 'Anakena',
    category: 'Moda',
    id: 1,
    storeImage: './storeImages/Anakena.jpg',
    local: 'L-1',
    floor: 'PB',
    description: 'Tienda de ropa de primera mano, con precios accesibes a todo el mundo!',
    products: [
      {
        productName: 'Camisa',
        productId: 1,
        price: 15.99,
        description: 'Camisa de lana negra',
        stock: 10,
        image: 'camisa.jpg'
      }
    ],
    discountProducts: [
      {
        productName: 'Chaqueta',
        productId: 2,
        price: 20,
        discount: 25,
        realPrice: 15,
        description: 'Chaqueta de lana azul',
        stock: 5,
        image: 'chaqueta.jpg'
      },
      {
        productName: 'Pantalón',
        productId: 3,
        price: 25,
        discount: 20,
        realPrice: 20,
        description: 'Pantalón de cuero negro',
        stock: 3,
        image: 'pantalon.jpg'
      }
    ],
    promos: [
      {
        promoName: 'Promo duo',
        descriptionPromo: 'Llevate 2 franelas de tu eleccion por el precio de una!',
        promoImage: 'blablabla',
        price: 7
      },
      {
        promoName: 'Promo Semanal',
        descriptionPromo:
          'Todos los miercoles la mercancia seleccionada tiene un 20% de descuento que esperas?.',
        promoImage: 'blablabla'
      }
    ]
  },
  {
    storeName: 'Balu',
    category: 'Moda',
    id: 2,
    storeImage: './storeImages/Balu.jpg',
    local: 'L-2',
    floor: 1,
    description:
      'Vestidos casuales, franelas, camisas, pantalones, blusas y mas!. Tu lugar para estar siempre a la moda.',
    products: [
      {
        productName: 'Franela',
        productId: 1,
        price: 10.5,
        description: 'Franela lisa negra',
        image: '../assets/productImage/FranelaNegra.jpg',
        stock: 15
      },
      {
        productName: 'Sudadera',
        productId: 2,
        price: 15,
        description: 'Sudadera Asimetrica de color Blanco',
        image: '../assets/productImage/SudaderaBlanca.jpg',
        stock: 10
      },
      {
        productName: 'Jean',
        productId: 3,
        price: 14.45,
        description: 'Pantalon Jean de color Azul',
        image: '../assets/productImage/JeanAzul.jpg',
        stock: 20
      }
    ]
  },
  {
    storeName: 'Digital Zone',
    category: 'Electronica',
    id: 3,
    storeImage: '@/storeImages/digital.png',
    local: 'L-3',
    floor: 'PB',
    description: 'Somos la tecnologia mas cerca de ti!',
    products: [
      {
        productName: 'Play Station 5 Slim',
        productId: 1,
        price: 650,
        description: 'Play Station 5 edicion Slim incluye SpiderMan',
        image: '../assets/productImage/ps5.png',
        stock: 5
      },
      {
        productName: 'Laptop LENOVO',
        productId: 2,
        price: 240,
        description: 'Laptop LENOVO IdeaPad 1 14IGL7',
        image: '../assets/productImage/Laptop.jpg',
        stock: 10
      }
    ]
  },
  {
    storeName: 'Multimax',
    category: 'Electronica',
    id: 4,
    storeImage: './storeImages/multi.jpg',
    local: 'L-4',
    floor: 1,
    description: 'La multimarca mas grande de Maracaibo',
    products: [
      {
        productName: 'Plancha a Vapor',
        productId: 1,
        price: 8.99,
        description: 'Plancha a Vapor Westinghouse',
        image: '../assets/productImage/Plancha.jpg',
        stock: 10
      },
      {
        productName: 'Sandwichera',
        productId: 2,
        price: 9.99,
        description: 'Sandwichera Kucce 750W',
        image: '../assets/productImage/sandu.jpg',
        stock: 5
      }
    ]
  },
  {
    storeName: 'Corial',
    category: 'Bisuteria',
    id: 5,
    local: 'L-5',
    floor: 'PB',
    storeImage: './storeImages/Corial.jpg',
    description:
      'Corial te ofrece los mejores precios en una amplia gama de zarcillos, collares y otros articulos de bisuteria para adornar tu belleza',
    products: [
      {
        productName: 'Zarcillo de plata',
        price: 4,
        productId: 1,
        description: 'Zarcillo de plata en forma de cruz',
        image: '../assets/productImage/zracillo.jpg',
        stock: 10
      },
      {
        productName: 'Collar de oro',
        price: 6,
        productId: 2,
        description: 'Collar de oro de gran calidad',
        image: 'collar1.jpg',
        stock: 5
      },
      {
        productName: 'Anillo de acero-inoxidable',
        price: 3,
        productId: 3,
        description: 'Anillo de acero inoxidable de buena calidad',
        image: '../assets/productImage/collar.jpg',
        stock: 3
      }
    ]
  },
  {
    storeName: 'Punto Magico',
    category: 'Bisuteria',
    id: 6,
    local: 'L-6',
    floor: 'PB',
    storeImage: './storeImages/PuntoM.jpg',
    description: 'Articulos para la elaboracion de bisuteria, manualidades y mucho mas!',
    products: [
      {
        productName: 'Medallon',
        price: 0.31,
        productId: 1,
        description: 'Medallon de la Inmaculada Concepcion',
        image: '../assets/productImage/medallon.jpg',
        stock: 10
      },
      {
        productName: 'Cruz',
        price: 1.4,
        productId: 2,
        description: 'Medallon de la Cruz Tertium Milennium',
        image: '../assets/productImage/cruz.jpg',
        stock: 5
      }
    ]
  }
]

export default stores
