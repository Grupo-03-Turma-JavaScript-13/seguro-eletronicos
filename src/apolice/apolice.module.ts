import { Module } from '@nestjs/common';
import { ApoliceService } from './apolice.service';
import { ApoliceController } from './apolice.controller';

@Module({
  controllers: [ApoliceController],
  providers: [ApoliceService],
})
export class ApoliceModule {}
