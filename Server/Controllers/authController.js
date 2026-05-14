import userModel from "../Models/userModel"



export const userRegister = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(401).json({ status: false, messgae: 'Email already Exist' })
        }
        const newUser = await userModel.create({
            name, email, password
        })
    }
    catch (error) {
        console.log(error)
        return res.status(422).json({ error: 'User Registation failed ' })
    }

}