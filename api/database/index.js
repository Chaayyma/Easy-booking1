import mongoose from "mongoose";

const dbConnect  = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
      } catch (error) {
        console.log(error);
      }
}

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
})
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected');
})

export default dbConnect;