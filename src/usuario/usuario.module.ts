import { forwardRef, Module } from '@nestjs/common';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { ApoliceModule } from '../apolice/apolice.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
  imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => ApoliceModule)],
})
export class UsuarioModule { }
