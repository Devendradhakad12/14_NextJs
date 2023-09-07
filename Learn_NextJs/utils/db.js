import mongoose from "mongoose"

export const connectdb = async ()=>{
    try {
       const {connection} = await mongoose.connect(process.env.MONGO_URI)
        console.log(`databse connected on ${connection.host}`)
    } catch (error) {
        console.log("Error",error)
    }
}