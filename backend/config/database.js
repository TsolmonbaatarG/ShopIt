const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB ${con.connection.host} баазтай холбогдлоо...`.green.underline)
    })
}

module.exports = connectDatabase