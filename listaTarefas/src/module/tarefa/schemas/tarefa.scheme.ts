import { Schema, model } from 'mongoose'

const tarefaSchema = new Schema({
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    status: Number,
    usuarioAssociado: String
}, { timestamps: true });

export default model("Tarefa", tarefaSchema)