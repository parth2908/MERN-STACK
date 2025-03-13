const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect(
    'mongodb+srv://parth:QztMcjtOfHts7Ris@cluster0.bt41t.mongodb.net/place_test?retryWrites=true&w=majority&appName=Cluster0'
    ).then(() => {
        console.log('connected to database!')
    }).catch(() => {
        console.log('Connection failed!')
    });



const createProduct = async (req, res, next) => {
    const createProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });
    const result = await createProduct.save();
    console.log(typeof createProduct._id);
    res.json(result);

};

const getProducts = async (req,res, next) => {
    const products = await Product.find().exec();
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;