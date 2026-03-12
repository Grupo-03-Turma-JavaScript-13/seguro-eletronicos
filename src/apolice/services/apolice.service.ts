import { Injectable } from '@nestjs/common';

@Injectable()
export class ApoliceService {
  create(createApoliceDto: CreateApoliceDto) {
    return 'This action adds a new apolice';
  }

  findAll() {
    return `This action returns all apolice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apolice`;
  }

  update(id: number, updateApoliceDto: UpdateApoliceDto) {
    return `This action updates a #${id} apolice`;
  }

  remove(id: number) {
    return `This action removes a #${id} apolice`;
  }
}
