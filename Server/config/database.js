import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const url = process.env.MONGO_URL;

        const dbConnection = await mongoose.connect(url);
        console.log('MongoDb Connected', dbConnection.connection.host)
    }
    catch (error) {
        console.error('Error to Connect Db', error.message)
    }
}
export default connectDB;