import { Request, Response } from 'express'
// import categoriaService from "../services/categoria.service";


// class BookController {
//     async create(req: Request, res: Response) {
//         const createdCategoria = await categoriaService.create(req.body)
//         res.status(201)
//         return res.json(createdCategoria)
//     }

//     async findAll(req: Request, res: Response) {
//         const findCategorias = await categoriaService.findAll()
//         return res.json(findCategorias)
//     }

//     async findById(req: Request, res: Response) {
//         const findCategoria = await categoriaService.findById(req.params.id)
//         return res.json(findCategoria)
//     }

//     async update(req: Request, res: Response) {
//         const updatedCategoria = await categoriaService.update(req.params.id, req.body)
//         return res.json(updatedCategoria)
//     }

//     async delete(req: Request, res: Response) {
//         const deleteMessage = await categoriaService.delete(req.params.id)
//         return res.json(deleteMessage)
//     }
// }

// export default new BookController()