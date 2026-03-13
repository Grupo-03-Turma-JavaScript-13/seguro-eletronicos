import { ClienteService } from './../../cliente/services/cliente.service';
import { Apolice } from './../entities/apolice.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UsuarioService } from '../../usuario/services/usuario.service';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Injectable()
export class ApoliceService {
  constructor(
    @InjectRepository(Apolice)
    private readonly apoliceRepository: Repository<Apolice>,
    private readonly usuarioService: UsuarioService,
    private readonly clienteService: ClienteService,
  ) {}

  async create(apolice: Apolice): Promise<Apolice> {
    if (!apolice.cliente)
      throw new HttpException(
        'Os dados do cliente não foram informados!',
        HttpStatus.BAD_REQUEST,
      );
    if (!apolice.usuario)
      throw new HttpException(
        'Os dados do usuário não foram informados!',
        HttpStatus.BAD_REQUEST,
      );

    await this.clienteService.findById(apolice.cliente.id);
    await this.usuarioService.findById(apolice.usuario.id);

    calcularDesconto(apolice);

    return this.apoliceRepository.save(apolice);
  }

  async findAll(): Promise<Apolice[]> {
    return await this.apoliceRepository
      .createQueryBuilder('apolice')
      // 1. Faz o JOIN com as tabelas relacionadas
      .leftJoin('apolice.cliente', 'cliente')
      .leftJoin('apolice.usuario', 'usuario')

      // 2. Seleciona apenas id e nome das relações
      .addSelect(['cliente.id', 'cliente.nome'])
      .addSelect(['usuario.id', 'usuario.nome'])

      // 3. Executa a query e retorna todos os resultados em um array
      .getMany();
  }

  async findById(id: number): Promise<Apolice> {
    const apolice = await this.apoliceRepository
      .createQueryBuilder('apolice')
      // 1. Faz o JOIN com as tabelas relacionadas
      .leftJoin('apolice.cliente', 'cliente')
      .leftJoin('apolice.usuario', 'usuario')

      // 2. Seleciona apenas id e nome das relações
      .addSelect(['cliente.id', 'cliente.nome','cliente.cpf'])
      .addSelect(['usuario.id', 'usuario.nome','usuario.usuario'])

      // 3. Filtra pelo ID da apólice
      .where('apolice.id = :id', { id })

      // 4. Retorna apenas um objeto (ou null se não encontrar)
      .getOne();
    if (!apolice)
      throw new HttpException('Apolice não encontrada!', HttpStatus.NOT_FOUND);

    return apolice;
  }

  async update(apolice: Apolice): Promise<Apolice> {
    if (!apolice.id || apolice.id <= 0)
      throw new HttpException(
        'O ID da apolice é invalido!',
        HttpStatus.BAD_REQUEST,
      );

    const apoliceBanco = await this.findById(apolice.id);

    if (!apolice.cliente)
      apolice.cliente = { id: apoliceBanco.cliente.id } as Cliente;
    else await this.clienteService.findById(apolice.cliente.id);

    if (!apolice.usuario)
      apolice.usuario = { id: apoliceBanco.usuario.id } as Usuario;
    else await this.usuarioService.findById(apolice.usuario.id);

    calcularDesconto(apolice);
    return await this.apoliceRepository.save(apolice);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.apoliceRepository.delete(id);
  }

  async findByFaixaDeValores(min: number, max: number): Promise<Apolice[]> {
    return await this.apoliceRepository
      .createQueryBuilder('apolice')
      // 1. Faz o JOIN com as tabelas relacionadas
      .leftJoin('apolice.cliente', 'cliente')
      .leftJoin('apolice.usuario', 'usuario')

      // 2. Seleciona apenas os campos necessários das relações
      .addSelect(['cliente.id', 'cliente.nome'])
      .addSelect(['usuario.id', 'usuario.nome'])

      // 3. Aplica o filtro equivalente ao "Between(min, max)"
      .where('apolice.valorFinal BETWEEN :min AND :max', { min, max })

      // 4. Aplica a ordenação equivalente ao "order: { valorFinal: 'ASC' }"
      .orderBy('apolice.valorFinal', 'ASC')

      // 5. Executa a query e retorna os resultados
      .getMany();
  }

  async findByTipoDispositivo(tipoDispositivo: string): Promise<Apolice[]> {
    return await this.apoliceRepository
      .createQueryBuilder('apolice')
      // 1. Faz o JOIN com as tabelas relacionadas
      .leftJoin('apolice.cliente', 'cliente')
      .leftJoin('apolice.usuario', 'usuario')

      // 2. Seleciona apenas id e nome.
      // Nota: Todos os campos de 'apolice' já vêm por padrão no createQueryBuilder
      .addSelect(['cliente.id', 'cliente.nome'])
      .addSelect(['usuario.id', 'usuario.nome'])

      // 3. Aplica o filtro com ILIKE (ignorando maiúsculas/minúsculas)
      .where('apolice.tipoDispositivo LIKE :tipo', {
        tipo: `%${tipoDispositivo}%`,
      })

      // 4. Executa a query e retorna os resultados em um array
      .getMany();
  }
}

function calcularDesconto(apolice: Apolice): void {
  
  const anoAtual = new Date().getFullYear();
  const anosDeUso = anoAtual - apolice.anoAquisicao;
  if (anosDeUso > 3) {
    apolice.valorDesconto = apolice.valorBase * 0.3;
  } else {
    apolice.valorDesconto = 0;
  }
  apolice.valorFinal = apolice.valorBase - apolice.valorDesconto;
}
