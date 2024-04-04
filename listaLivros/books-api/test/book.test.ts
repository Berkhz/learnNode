import app from '../src/app'
import { describe, it, expect } from '@jest/globals'
import BookModel from '../src/books/schemas/book.schema'
import * as request from 'supertest'

describe("Testabdi endpoints de books", () => {
    it('Deve inserir um livro no banco de dados', async () => {
        const bookModel = {
            title: "Androids sonham com ovelhas elétricas?",
            author: "Philik. Dick",
            ISBN: "123-A",
            price: 20.99
        }

        const response = await request.default(app).post('/books').send(bookModel)
        const findedBook = await BookModel.findById(response.body._id)

        expect(response.status).toEqual(201)
        expect(response.body._id).toBeDefined()
        expect(bookModel.title).toBe(findedBook?.title)
        expect(bookModel.title).toBe(findedBook?.author)
        expect(bookModel.title).toBe(findedBook?.ISBN)
        expect(bookModel.title).toBe(findedBook?.price)
    })

    it('Deve recuperar todos os livros do banco de dados', async () => {
        const responseRequired = await request.default(app).get('/books')
        const totalBookOnDatabase = await BookModel.countDocuments()

        expect(responseRequired.status).toEqual(200)
        expect(responseRequired.body.length).toEqual(totalBookOnDatabase)
    })
})