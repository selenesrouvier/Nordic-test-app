const router = require('nordic/ragnar').router();
const { showUrl } = require('./middleware');

let objProducts = [
  {
    id: 1, 
    title: 'macbook',
    price: 2000,
    description: 'computadora de la marca apple',
    quantity: 3

  },
  {
    id: 1, 
    title: 'applewatch',
    price: 300,
    description: 'reloj de la marca apple',
    quantity: 1

  },
  {
    id: 1, 
    title: 'iphone 12',
    price: 1200,
    description: 'celular de la marca apple',
    quantity: 5

  },
  {
    id: 1, 
    title: 'monitor samsung',
    price: 500,
    description: 'pantalla plana que sirve para diferentes usos',
    quantity: 5

  },
]

router.get('/', showUrl, (req, res) => {
  res.status(200).json(objProducts)
})

module.exports = router;
