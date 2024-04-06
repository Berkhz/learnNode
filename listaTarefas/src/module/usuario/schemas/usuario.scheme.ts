import { Schema, model } from 'mongoose'

const usuarioSchema = new Schema({
    id: Number,
    username: String,
    peso: Number,
    senha: String,
    email: String
}, { timestamps: true })

export default model("Usuario", usuarioSchema)