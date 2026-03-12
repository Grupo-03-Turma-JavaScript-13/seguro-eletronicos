import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>
  ) {}

  findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  findById(id: string): Promise<Cliente | null> {
    return this.clienteRepository.findOneBy({ id });
  }

  create(cliente: Cliente): Promise<Cliente> {
    return this.clienteRepository.save(cliente);
  }

  update(cliente: Cliente): Promise<Cliente> {
    return this.clienteRepository.save(cliente);
  }

  delete(id: string) {
    return this.clienteRepository.delete(id);
  }

}