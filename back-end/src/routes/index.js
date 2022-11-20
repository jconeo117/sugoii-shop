const express = require('express')
const router = express.Router()

//CONTROLADORES
const verifyToken = require('../controllers/users/verifyToken')

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

//REVIEWS
const {
     GetReviews,
     PostReview,
     DeleteReviews
} = require('./products/reviews')



//RUTAS PARA LOS PRODUCTOS
router.get('/products', GetProducts)
router.get('/products/:id', GetProductsById)
router.post('/products', verifyToken, PostProducts)
router.put('/products/:id', verifyToken, UpdateProduct)
router.delete('/products/:id', verifyToken, DeleteProducts)



//RUTA PARA AÑADIR Y REMOVER FAVORITOS
router.post('/favorite/add', verifyToken, addFav)
router.put('/favorite/remove',verifyToken, removeFav)

//RUTA PARA AÑADIR REVIEWS
router.get('/review/get/:id', GetReviews)
router.post('/review/post/:id', PostReview)
router.put('/review/delete/:id',verifyToken, DeleteReviews)

//REGISTRO Y LOGIN DE USUARIOS Y ADMIN
router.post('/user/register',RegisterUser)
router.post('/user/login',LoginUser)

module.exports = router