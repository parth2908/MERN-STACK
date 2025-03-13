const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://parth:QztMcjtOfHts7Ris@cluster0.bt41t.mongodb.net/place_test?retryWrites=true&w=majority&appName=Cluster0'

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        await db.collection('products').insertOne(newProduct);
    } catch (error) {
        return res.json({message: 'Could not store data.'});
    };
    client.close();

    res.json(newProduct);
};


const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);

    let products;

    try{
        await client.connect();
        const db = client.db();
        products = await db.collection('products').find().toArray();
    } catch (error) {
        return res.json({message: 'Could not retrieve products.'});
    };
    client.close();

    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;