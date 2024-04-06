import { StatusEnum } from "../schemas/tarefa.scheme"; // Importando o enum StatusEnum

export interface TarefaType {
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    categoriaId: Number,
    status: typeof StatusEnum, 
    usuarioId: Number
}