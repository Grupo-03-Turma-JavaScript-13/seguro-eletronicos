import { Module } from '@nestjs/common';
import { ApoliceModule } from './apolice/apolice.module';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apolice } from './apolice/entities/apolice.entity';
import { Cliente } from './cliente/entities/cliente.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_seguro_eletronicos',
      entities: [Cliente, Apolice, Usuario],
      synchronize: true,
      //logging: true,
    }),
    ClienteModule,
    ApoliceModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
