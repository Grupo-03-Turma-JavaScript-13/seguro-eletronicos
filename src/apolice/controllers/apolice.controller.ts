import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApoliceService } from "../services/apolice.service"
import { Apolice } from '../entities/apolice.entity';

@Controller('apolice')
export class ApoliceController {
  constructor(private readonly apoliceService: ApoliceService) {}

  @Post()
  create(@Body() apolice: Apolice
) {
    return this.apoliceService.create(apolice

    );
  }

  @Get()
  findAll() {
    return this.apoliceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apoliceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() apolice: Apolice
) {
    return this.apoliceService.update(+id, apolice);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apoliceService.remove(+id);
  }
}
