import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ApoliceService } from '../apolice/services/apolice.service';
import { ApoliceController } from './controllers/apolice.controller';
import { Apolice } from './entities/apolice.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Apolice])],
  controllers: [ApoliceController],
  providers: [ApoliceService],
})
export class ApoliceModule {}
