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
    categoriaId: String,
    status: {
        type: Number,
        enum: Object.keys(StatusEnum).map(key => parseInt(key))
    },
    usuarioId: String
}, { timestamps: true })

export { StatusEnum }
export default model("Tarefa", tarefaSchema)
