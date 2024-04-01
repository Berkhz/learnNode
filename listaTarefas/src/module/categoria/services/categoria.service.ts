import bookModel from "../schemas/categoria.scheme";
import { CategoriaType } from "../types/categoria.type";

class BookService {
    async create(book: CategoriaType) {
        const createdBook = await bookModel.create(book)
        return createdBook
    }

    async findAll() {
        const findedBooks = await bookModel.find()
        return findedBooks
    }

    async findById(id: string) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async update(id: string, book: CategoriaType) {
        const updateBook = await bookModel.findByIdAndUpdate(id, {
            title: book.title,
            author: book.author,
            price: book.price
        }, { new: true })
        return updateBook
    }

    async delete(id: string) {
        try {
            await bookModel.findByIdAndDelete(id)
            return "Livro Removido"
        } catch (error) {
            throw new Error(`Erro ao remover livro: ${error}`)
        }
    }
}


export default new BookService()