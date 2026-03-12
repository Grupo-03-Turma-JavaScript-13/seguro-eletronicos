import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';

@Controller('/clientes')
export class ClienteController {

  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.clienteService.findById(id);
  }

  @Post()
  create(@Body() cliente: Cliente) {
    return this.clienteService.create(cliente);
  }

  @Put()
  update(@Body() cliente: Cliente) {
    return this.clienteService.update(cliente);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.clienteService.delete(id);
  }

}