import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { ApoliceModule } from './apolice/apolice.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apolice } from './apolice/entities/apolice.entity';
import { Cliente } from './cliente/entities/cliente.entity';
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
      entities: [Apolice, Cliente, Usuario],
      synchronize: true,
      //logging: true,
    }),
    ClienteModule,
    ApoliceModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
