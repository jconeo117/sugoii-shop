const express = require('express')
const router = express.Router()

//PRODUCTOS
const {
     GetProducts,
     GetProductsById,
     PostProducts,
     UpdateProduct,
     DeleteProducts
} = require('./products/products')

//FAVORITOS
const {
     addFav,
     removeFav
} =require('./products/favorites')

//USUARIOS
const {
     RegisterUser,
     LoginUser
} = require('./users/user')

const {
     RegisterAdmin,
     LoginAdmin
} = require('./users/admin')

//REVIEWS
const {
     PostReview
} = require('./products/reviews')



//RUTAS PARA LOS PRODUCTOS
router.get('/products', GetProducts)
router.get('/products/:id', GetProductsById)
router.post('/products', PostProducts)
router.put('/products/:id', UpdateProduct)
router.delete('/products/:id', DeleteProducts)

//RUTA PARA AÑADIR Y REMOVER FAVORITOS
router.post('/favorite/add', addFav)
router.put('/favorite/remove', removeFav)

//RUTA PARA AÑADIR REVIEWS
router.post('/review/:id', PostReview)

//REGISTRO Y LOGIN DE USUARIOS Y ADMIN
router.post('/user/register',RegisterUser)
router.post('/user/login',LoginUser)
router.post('/admin/register',RegisterAdmin)
router.post('/admin/login',LoginAdmin)



module.exports = router