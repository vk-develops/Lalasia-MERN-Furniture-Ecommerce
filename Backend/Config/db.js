import mongoose from "mongoose";

const connectDb = async () => {
    try {
        //Establish a connection
        const connectionOfDb = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`Database connected to ${connectionOfDb.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

//Export
export default connectDb;
