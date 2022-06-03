const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema ({
    category: String
})

const Category = mongoose.model('Category', categoriesSchema)
module.exports = Category