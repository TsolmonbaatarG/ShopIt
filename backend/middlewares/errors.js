const ErrorHandler = require('../utils/errorHandler');


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        console.log(err);

        // res.status(err.statusCode).json({
        //     success: false,
        //     error: err,
        //     errMessage: err.message,
        //     stack: err.stack
        // })

         // Wrong Mongoose Object ID Error
         if (err.name === 'CastError') {
            const message = `${err.value} буруу бүтэцтэй ID байна! `
            error = new ErrorHandler(message, 400)
        }

        // Handling Mongoose Validation Error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400)
        }

        // Handling Mongoose duplicate key errors
        if (err.code === 11000) {
            const message = `${Object.keys(err.keyValue)} талбарын утгыг давхардуулж өгч болохгүй!`
            error = new ErrorHandler(message, 400)
        }

        // Handling wrong JWT error
        if (err.name === 'JsonWebTokenError') {
            const message = 'Буруу токен дамжуулсан байна';
            error = new ErrorHandler(message, 400)
        }

        // Handling Expired JWT error
        if (err.name === 'TokenExpiredError') {
            const message = 'Токены хугацаа дууссан байна. Дахин нэвтэрнэ үү!!!'
            error = new ErrorHandler(message, 400)
        }

        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || 'Сервер ажилллахгүй байна'
        })
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err }

        error.message = err.message;

        // Wrong Mongoose Object ID Error
        if (err.name === 'CastError') {
            const message = `${err.value} буруу бүтэцтэй ID байна! `
            error = new ErrorHandler(message, 400)
        }

        // Handling Mongoose Validation Error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400)
        }

        // Handling Mongoose duplicate key errors
        if (err.code === 11000) {
            const message = `${Object.keys(err.keyValue)} талбарын утгыг давхардуулж өгч болохгүй!`
            error = new ErrorHandler(message, 400)
        }

        // Handling wrong JWT error
        if (err.name === 'JsonWebTokenError') {
            const message = 'Буруу токен дамжуулсан байна';
            error = new ErrorHandler(message, 400)
        }

        // Handling Expired JWT error
        if (err.name === 'TokenExpiredError') {
            const message = 'Токены хугацаа дууссан байна. Дахин нэвтэрнэ үү!!!'
            error = new ErrorHandler(message, 400)
        }

        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || 'Сервер ажилллахгүй байна'
        })
    }

}