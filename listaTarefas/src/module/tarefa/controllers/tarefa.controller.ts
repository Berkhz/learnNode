import { Request, Response } from 'express'
import tarefaService from "../services/tarefa.service"

class TarefaController {
    async create(req: Request, res: Response) {
        const createdTarefa = await tarefaService.create(req.body)
        res.status(201)
        return res.json(createdTarefa)
    }

    async findAll(req: Request, res: Response) {
        const findedTarefaS = await tarefaService.findAll()
        return res.json(findedTarefaS)
    }

    async findById(req: Request, res: Response) {
        const findTarefa = await tarefaService.findById(req.params.id)
        return res.json(findTarefa)
    }

    async update(req: Request, res: Response) {
        const updatedTarefa = await tarefaService.update(req.params.id, req.body)
        return res.json(updatedTarefa)
    }

    async delete(req: Request, res: Response) {
        const deleteMessage = await tarefaService.delete(req.params.id)
        return res.json(deleteMessage)
    }

    async filtrarTaskCategoria(req: Request, res: Response) {
        const filtrarCategoria = await tarefaService.filtrarTaskCategoria(req.body)
        return res.json(filtrarCategoria)
    }

    async taskAntiga(req: Request, res: Response) {
        const tarefaMaisAntiga = await tarefaService.taskAntiga(req.body)
        return res.json(tarefaMaisAntiga)    
    }
    
    async agruparTaskPorCategoria(req: Request, res: Response) {
        const agruparCategoria = await tarefaService.agruparTaskPorCategoria(req.body)
        return res.json(agruparCategoria)    
    }
    
    async buscaTaskRecente(req: Request, res: Response) {
        const buscarRecente = await tarefaService.buscaTaskRecente(req.body)
        return res.json(buscarRecente)
    }
    
    async qtdTaskUsuario(req: Request, res: Response) {
        const qtdTask = await tarefaService.qtdTaskUsuario(req.body)
        return res.json(qtdTask)
    }
    
    async listaTaskVencimento(req: Request, res: Response) {
        const listarVencimento = await tarefaService.listaTaskVencimento(req.body)
        return res.json(listarVencimento)
    }
    
    async listaTasksConcluidasPendentes(req: Request, res: Response) {
        const listarConcluidasPendentes = await tarefaService.listaTasksConcluidasPendentes(req.body)
        return res.json(listarConcluidasPendentes)
    }
    
    async encontraDescricaoLonga(req: Request, res: Response) {
        const descricaoLonga = await tarefaService.encontraDescricaoLonga(req.body)
        return res.json(descricaoLonga)    
    }
    
    async calculaConclusaoTasks(req: Request, res: Response) {
        const calculaMediaConclusao = await tarefaService.calculaConclusaoTasks(req.body)
        return res.json(calculaMediaConclusao)
    }
}

export default new TarefaController()