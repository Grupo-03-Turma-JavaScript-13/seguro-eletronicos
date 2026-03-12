import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [Cliente],
      synchronize: true,
      //logging: true,
    }),
    ClienteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
