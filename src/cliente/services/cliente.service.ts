import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({ relations: { apolices: true } });
  }

  async findById(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { id },
      relations: { apolices: true },
    });
    if (!cliente) throw new NotFoundException('Cliente não encontrado!');

    return cliente;
  }

  async emailExists(email: string): Promise<void> {
    const cliente = await this.clienteRepository.findOne({ where: { email } });
    if (cliente)
      throw new HttpException('E-mail já está cadastrado', HttpStatus.CONFLICT);
  }

  async cpfExists(cpf: string): Promise<void> {
    const cliente = await this.clienteRepository.findOne({ where: { cpf } });
    if (cliente)
      throw new HttpException('CPF já está cadastrado', HttpStatus.CONFLICT);
  }
  async create(cliente: Cliente): Promise<Cliente> {
    await this.cpfExists(cliente.cpf);
    await this.emailExists(cliente.email);
    return this.clienteRepository.save(cliente);
  }

  async update(cliente: Cliente): Promise<Cliente> {
    const clienteEncontrado = await this.findById(cliente.id);

    if (cliente.email !== clienteEncontrado.email) {
      await this.emailExists(cliente.email);
    }
    cliente.cpf = clienteEncontrado.cpf;
    return this.clienteRepository.save(cliente);
  }

  async delete(id: number) {
    await this.findById(id);
    return this.clienteRepository.delete(id);
  }

  async findByCpf(cpf: string): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { cpf },
      relations: { apolices: true },
    });
    if (!cliente)
      throw new HttpException('CPF não encontrado', HttpStatus.NOT_FOUND);
    return cliente;
  }
  async findAllByNome(nome: string): Promise<Cliente[]> {
    return await this.clienteRepository.find({
      where: { nome: ILike(`%${nome}%`) },
      relations: { apolices: true },
    });
  }
}
