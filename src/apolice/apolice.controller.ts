import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApoliceService } from './apolice.service';

@Controller('apolice')
export class ApoliceController {
  constructor(private readonly apoliceService: ApoliceService) {}

  @Post()
  create(@Body() createApoliceDto: CreateApoliceDto) {
    return this.apoliceService.create(createApoliceDto);
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
  update(@Param('id') id: string, @Body() updateApoliceDto: UpdateApoliceDto) {
    return this.apoliceService.update(+id, updateApoliceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apoliceService.remove(+id);
  }
}
