import mongoose from "mongoose";
import colors from 'colors';
const connectDB=async() => {
    try{
        const conn=await mongoose.connect('mongodb+srv://1122rahulchoudhary:uExj960q8HlRO3Hm@cluster0.jnkhy.mongodb.net/ecommerce');
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white)
    }
    catch(error){
        console.log(`${error}`).bgRed.white;
    };
};

export default connectDB