const colors = require("colors");
const Product = require('../models/product');
const User = require('../models/user');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');
const users = require('../data/users');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedProducts = async () => {
    try {

        await Product.deleteMany();
        await User.deleteMany();
        console.log("Өгөгдлийг бүгдийг устгалаа....".red.inverse);

        await Product.insertMany(products)
        await User.insertMany(users)
        console.log("Өгөгдлийг импортлолоо....".green.inverse);
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()