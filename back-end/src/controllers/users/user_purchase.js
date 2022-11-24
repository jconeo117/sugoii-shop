const Pre_purchase = require('../../models/products/pre-purchase')


const userPrepurchase = async ({user})=>{

    const userPurchase = await Pre_purchase.find()
    return userPurchase
}

module.exports={
    userPrepurchase
}