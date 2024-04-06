export interface TarefaType {
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    status: Number,
    usuarioAssociado: String
}