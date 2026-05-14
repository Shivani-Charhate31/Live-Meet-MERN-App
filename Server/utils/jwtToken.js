import jwt from 'jsonwebtoken'

const JWT_SERCET = process.env.jWT_SERCET


export const generateToken = async (userId) => {
    return jwt.sign({
        userId
    },
        JWT_SERCET
        , {
            expiresIn = process.env.JWT_EXPIRES_IN
        })
}

export const verifyToken = (token) => {
    try {
        return verifyToken(token, JWT_SERCET)

    } catch (error) {
        throw new Error('Invalid Token or Expire token')
    }
}