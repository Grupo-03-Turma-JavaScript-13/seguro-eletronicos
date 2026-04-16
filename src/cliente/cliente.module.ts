import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteController } from './controllers/cliente.controller';
import { ClienteService } from './services/cliente.service';
import { ApoliceModule } from '../apolice/apolice.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), forwardRef(() => ApoliceModule)],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports:[ClienteService]
})
export class ClienteModule {}