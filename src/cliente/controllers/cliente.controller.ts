import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../entities/cliente.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clientes')
@Controller('/clientes')
export class ClienteController {

  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() cliente: Cliente) {
    return this.clienteService.create(cliente);
  }

  @Put()
  @HttpCode(HttpStatus.OK)  
  update(@Body() cliente: Cliente) {
    return this.clienteService.update(cliente);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.delete(id);
  }

  @Get('buscarnome/:nome')
  @HttpCode(HttpStatus.OK)  
  findAllByNome(@Param('nome') nome: string) {
    return this.clienteService.findAllByNome(nome);
  }

  @Get('buscarcpf/:cpf')
  @HttpCode(HttpStatus.OK)  
  findByCpf(@Param('cpf') cpf: string) {
    return this.clienteService.findByCpf(cpf);
  }
}