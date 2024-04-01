import { Schema, model } from 'mongoose'

//	Atributos: ID, nome, cor (para identificação visual).
const cateogiraSchema = new Schema({
    id: Number,
    nome: String,
    cor: String
}, { timestamps: true });

export default model("Book", cateogiraSchema)