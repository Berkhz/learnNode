import usuarioModel from "../schemas/usuario.scheme";
import { UsuarioType } from "../types/usuario.type";

class UsuarioService {
    async create(usuario: UsuarioType) {
        const createdUsuario = await usuarioModel.create(usuario)
        return createdUsuario
    }

    async findAll() {
        const findedUsuarios = await usuarioModel.find()
        return findedUsuarios
    }

    async findById(id: string) {
        const findedUsuario = await usuarioModel.findById(id)
        return findedUsuario
    }

    async update(id: string, usuario: UsuarioType) {
        const updateUsuario = await usuarioModel.findByIdAndUpdate(id, {
            id: usuario.id,
            username: usuario.username,
            peso: usuario.peso,
            senha: usuario.senha,
            email: usuario.email
        }, { new: true })
        return updateUsuario
    }

    async delete(id: string) {
        try {
            await usuarioModel.findByIdAndDelete(id)
            return "Usuário Removido"
        } catch (error) {
            throw new Error(`Erro ao remover usuário: ${error}`)
        }
    }
}


export default new UsuarioService()