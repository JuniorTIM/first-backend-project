const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    product: String,
    category: {
        ref: ('Category'),
        type: mongoose.SchemaTypes.ObjectId
    },
    brand: {
        ref: ('Brand'),
        type: mongoose.SchemaTypes.ObjectId
    }

})

const Product = mongoose.model('Product', productsSchema)
module.exports = Product