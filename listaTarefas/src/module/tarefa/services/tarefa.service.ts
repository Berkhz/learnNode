import usuarioModel from "../schemas/tarefa.scheme";
import { TarefaType } from "../types/tarefa.type";

class TarefaService {
    async create(tarefa: TarefaType) {
        const createdTarefa = await usuarioModel.create(tarefa)
        return createdTarefa
    }

    async findAll() {
        const findedTarefas = await usuarioModel.find()
        return findedTarefas
    }

    async findById(id: string) {
        const findedTarefa = await usuarioModel.findById(id)
        return findedTarefa
    }

    async update(id: string, tarefa: TarefaType) {
        const updateTarefa = await usuarioModel.findByIdAndUpdate(id, {
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            dataCriacao: tarefa.dataCriacao,
            dataConclusao: tarefa.dataConclusao,
            tipo: tarefa.tipo,
            status: tarefa.status,
            usuarioAssociado: tarefa.usuarioAssociado
        }, { new: true })
        return updateTarefa
    }

    async delete(id: string) {
        try {
            await usuarioModel.findByIdAndDelete(id)
            return "Tarefa Removida"
        } catch (error) {
            throw new Error(`Erro ao remover tarefa: ${error}`)
        }
    }
}


export default new TarefaService()