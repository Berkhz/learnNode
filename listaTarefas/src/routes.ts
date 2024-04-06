import { Router } from 'express'
import categoriaController from './module/categoria/controllers/categoria.controller'
import usuarioController from './module/usuario/controllers/usuario.controller'
import tarefaController from './module/tarefa/controllers/tarefa.controller'

const routes = Router()

// Categoria routes
routes.post('/categoria', categoriaController.create)
routes.get('/categoria', categoriaController.findAll)
routes.get('/categoria/:id', categoriaController.findById)
routes.put('/categoria/:id', categoriaController.update)
routes.delete('/categoria/:id', categoriaController.delete)

// Usuario routes
routes.post('/usuario', usuarioController.create)
routes.get('/usuario', usuarioController.findAll)
routes.get('/usuario/:id', usuarioController.findById)
routes.put('/usuario/:id', usuarioController.update)
routes.delete('/usuario/:id', usuarioController.delete)

// Tarefa routes
routes.post('/tarefa', tarefaController.create)
routes.get('/tarefa', tarefaController.findAll)
routes.get('/tarefa/:id', tarefaController.findById)
routes.put('/tarefa/:id', tarefaController.update)
routes.delete('/tarefa/:id', tarefaController.delete)

routes.get('/tarefa/filtrar', tarefaController.filtrarTaskCategoria)
routes.get('/tarefa/antiga', tarefaController.taskAntiga)
routes.get('/tarefa/listar', tarefaController.listaTasksConcluidasPendentes)
routes.get('/tarefa/vencimento', tarefaController.listaTaskVencimento)
routes.get('/tarefa/qtd', tarefaController.qtdTaskUsuario)
routes.get('/tarefa/buscar', tarefaController.buscaTaskRecente)
routes.get('/tarefa/calcular', tarefaController.calculaConclusaoTasks)
routes.get('/tarefa/encontrar', tarefaController.encontraDescricaoLonga)
routes.get('/tarefa/agrupar', tarefaController.agruparTaskPorCategoria)

export {
    routes
}