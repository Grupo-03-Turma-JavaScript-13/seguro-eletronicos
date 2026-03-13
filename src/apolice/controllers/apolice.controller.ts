import { Controller, Get, Post, Body, Patch, Param,Query, Delete, HttpCode, HttpStatus, ParseIntPipe, Put } from '@nestjs/common';
import { ApoliceService } from "../services/apolice.service"
import { Apolice } from '../entities/apolice.entity';

@Controller('/apolices')
export class ApoliceController {
  constructor(private readonly apoliceService: ApoliceService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Apolice[]> {
    return this.apoliceService.findAll();
  }

  @Get('apolice/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Apolice>{
    return this.apoliceService.findById(id)
  }

  
  @Get('/dispositivos/:dispositivo')
  @HttpCode(HttpStatus.OK)
  findByTipoDispositivo(@Param('dispositivo') dispositivo: string): Promise<Apolice[]>{
    return this.apoliceService.findByTipoDispositivo(dispositivo)
  }


  @Get("/buscar/:min/:max")
  @HttpCode(HttpStatus.OK)
  findByFaixaDeValores(@Param('min', ParseIntPipe) min: number, @Param('max', ParseIntPipe) max:number): Promise<Apolice[]>{
     
   return this.apoliceService.findByFaixaDeValores(min, max)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() apolice: Apolice): Promise<Apolice>{
    return this.apoliceService.create(apolice);
  }
  
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() apolice: Apolice): Promise<Apolice>{
    return this.apoliceService.update(apolice);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.apoliceService.delete(id)
  }
}
