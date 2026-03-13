import { Module } from '@nestjs/common';
import { ApoliceModule } from './apolice/apolice.module';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apolice } from './apolice/entities/apolice.entity';
import { Cliente } from './cliente/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_seguro_eletronicos',
      entities: [Cliente, Apolice],
      synchronize: true,
      //logging: true,
    }),
    ClienteModule,
    ApoliceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
