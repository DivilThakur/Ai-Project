import mongoose from "mongoose"

const connectDb = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
    })

    await mongoose.connect(`${process.env.MONGO_DB_URL}/AImage`);
}

export default connectDb;