import tarefaModel, { StatusEnum } from "../schemas/tarefa.scheme"
import usuarioModel from "../../usuario/schemas/usuario.scheme"
import categoriaModel from "../../categoria/schemas/categoria.scheme"
import { TarefaType } from "../types/tarefa.type"
import { CategoriaType } from "../../categoria/types/categoria.type"

class TarefaService {
    async create(tarefa: TarefaType) {
        const usuario = await usuarioModel.findById(tarefa.usuarioId)
        if (!usuario) {
            throw new Error("Usuário não encontrado")
        }

        const categoria = await categoriaModel.findById(tarefa.categoriaId)
        if (!categoria) {
            throw new Error("Categoria não encontrada")
        }

        const createdTarefa = await tarefaModel.create({
            ...tarefa,
            usuarioId: usuario._id,
            categoriaId: categoria._id
        })
        return createdTarefa
    }

    async findAll() {
        const findedTarefas = await tarefaModel.find()
        return findedTarefas
    }

    async findById(id: string) {
        const findedTarefa = await tarefaModel.findById(id)
        return findedTarefa
    }

    async update(id: string, tarefa: TarefaType) {
        const updateTarefa = await tarefaModel.findByIdAndUpdate(id, {
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            dataCriacao: tarefa.dataCriacao,
            dataConclusao: tarefa.dataConclusao,
            tipo: tarefa.tipo,
            categoriaId: tarefa.categoriaId,
            status: tarefa.status,
            usuarioId: tarefa.usuarioId
        }, { new: true })
        return updateTarefa
    }

    async delete(id: string) {
        try {
            await tarefaModel.findByIdAndDelete(id)
            return "Tarefa Removida"
        } catch (error) {
            throw new Error(`Erro ao remover tarefa: ${error}`)
        }
    }

    async filtrarTaskCategoria(tarefa: TarefaType) {
        try {
            const taskCategoria = await tarefaModel.find(tarefa.categoriaId)
            return taskCategoria
        }
        catch (error) {
            throw new Error(`Erro ao filtrar tarefa por categoria: ${error}`)
        }
    }
    
    async taskAntiga(tarefa: TarefaType) {
        try {
            const findTaskAntiga = await tarefaModel.find()
            return findTaskAntiga   
        } catch (error) {
            throw new Error(`Erro ao filtrar tarefa antiga: ${error}`)
        } 
    }
    
    async agruparTaskPorCategoria(tarefa: TarefaType) {
        try {
            
        } catch (error) {
            throw new Error(`Erro ao agrupar task por categoria: ${error}`)
        }
    }
    
    async encontraDescricaoLonga(tarefa: TarefaType) {
        try {
            
        } catch (error) {
            throw new Error(`Erro ao encontrar descricao longa: ${error}`)
        }
    }
    
    async calculaConclusaoTasks(tarefa: TarefaType) {
        try {
            
        } catch (error) {
            throw new Error(`Erro ao calcular conclusão tarefa: ${error}`)
        }
    }
    
    async buscaTaskRecente(tarefa: TarefaType) {
        try {
            
        } catch (error) {
            throw new Error(`Erro ao buscar tarefa mais recente: ${error}`)
        }
    }
    
    async qtdTaskUsuario(tarefa: TarefaType) {
        try {

        } catch (error) {
            throw new Error(`Erro ao buscar quantidade de tarefas por usuario: ${error}`)
        } 
    }
    
    async listaTaskVencimento(tarefa: TarefaType) {
        try {
            
        } catch (error) {
            throw new Error(`Erro ao listar task vencimento: ${error}`)
        }
    }
    
    async listaTasksConcluidasPendentes(tarefa: TarefaType) {
        try {
            
        } catch (error) {
            throw new Error(`Erro ao listar tasks concluidas e pendentes: ${error}`)
        }
    }
}

export default new TarefaService()