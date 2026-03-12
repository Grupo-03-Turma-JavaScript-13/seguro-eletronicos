import { Module } from '@nestjs/common';
import { ApoliceService } from './apolice.service';
import { ApoliceController } from './controllers/apolice.controller';

@Module({
  controllers: [ApoliceController],
  providers: [ApoliceService],
})
export class ApoliceModule {}
