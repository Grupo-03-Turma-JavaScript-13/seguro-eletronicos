import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { ApoliceService } from '../apolice/services/apolice.service';
import { ApoliceController } from './controllers/apolice.controller';
import { Apolice } from './entities/apolice.entity';
import { ClienteModule } from '../cliente/cliente.module';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports:[TypeOrmModule.forFeature([Apolice]), ClienteModule, UsuarioModule, forwardRef(() => UsuarioModule), forwardRef(() => ClienteModule)],
  controllers: [ApoliceController],
  providers: [ApoliceService],
})
export class ApoliceModule {}
