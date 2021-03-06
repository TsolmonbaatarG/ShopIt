const app = require('./app')
const connectDatabase = require('./config/database')

// const dotenv = require('dotenv');
const cloudinary = require('cloudinary')

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Сервер унтарсан байна...'.red.inverse);
    process.exit(1)
})

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

// dotenv.config({ path: 'backend/config/config.env' })


// Connecting to database
connectDatabase();

// Setting up cloudinary configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })

const server = app.listen(process.env.PORT, () => {
    console.log(`Express сервер ${process.env.PORT} порт дээр ${process.env.NODE_ENV}-р аслаа...`.blue.inverse)
})

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Холбоолтын алдаа гарч сервер унтарсан байна...'.red.inverse);
    server.close(() => {
        process.exit(1)
    })
})