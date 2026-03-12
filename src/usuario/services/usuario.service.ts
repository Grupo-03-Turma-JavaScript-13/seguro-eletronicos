import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }


    // Método para buscar um usuário pelo nome de usuário (e-mail)
    async findByUsuario(usuario: string): Promise<Usuario> {


        const resultado = await this.usuarioRepository.findOne({

            where: {
                usuario: usuario
            }
        });

        if (!resultado)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return resultado;
    }

    // Método para buscar todos os usuários
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({});
    }


    // Método para buscar um usuário pelo ID
    async findById(id: number): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findOne({
            where: {
                id
            },
        });

        if (!usuario)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;

    }

    // Método para criar um novo usuário
    async create(usuario: Usuario): Promise<Usuario> {


        const buscaUsuario = await this.findByUsuario(usuario.usuario);


        if (buscaUsuario)
            throw new HttpException("O Usuario já existe!", HttpStatus.BAD_REQUEST);


        return await this.usuarioRepository.save(usuario);

    }

    // Método para atualizar um usuário existente
    async update(usuario: Usuario): Promise<Usuario> {

        await this.findById(usuario.id);

        const buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (buscaUsuario && buscaUsuario.id !== usuario.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

        return await this.usuarioRepository.save(usuario);

    }

}