import { Schema, model } from 'mongoose'

const StatusEnum = Object.freeze({
    1: "Pendente",
    2: "Em andamento",
    3: "Concluída"
})

const tarefaSchema = new Schema({
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    categoriaId: Number,
    status: {
        type: String,
        enum: Object.values(StatusEnum)
    },
    usuarioId: Number
}, { timestamps: true });

export { StatusEnum }
export default model("Tarefa", tarefaSchema)