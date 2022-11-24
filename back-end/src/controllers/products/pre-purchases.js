const Pre_purchase = require('../../models/products/pre-purchase')

const getPre_purchase = async ()=>{
    
    const prepurchase = await Pre_purchase.find()
    return prepurchase

}

module.exports={
    getPre_purchase
}