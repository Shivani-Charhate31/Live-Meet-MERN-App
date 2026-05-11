const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error'

    if (err.name = 'ValidationError') {
        statusCode = 400;
        message = Object.values(err.errors).map(error => error.message).join(', ')
    }

    // mongoose dublicate error key

    if (err.code === 11000) {
        statusCode = 400;
        message = 'Dublicate Value Field'
    }
    // JWT
    if (err.name = 'Jsonwebtoken') {
        statusCode = 401
        message = 'Invalid Token'
    }
    if (err.name = 'TokenExperied Error') {
        statusCode = 401
        message = ' Token Experied'
    }
    console.error('Error', err)

    res.status(statusCode).json({
        sucess: false,
        error: message
    })
}

export default errorHandler