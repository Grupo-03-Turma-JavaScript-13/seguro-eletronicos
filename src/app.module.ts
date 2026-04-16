import { Module } from '@nestjs/common';
import { ApoliceModule } from './apolice/apolice.module';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apolice } from './apolice/entities/apolice.entity';
import { Cliente } from './cliente/entities/cliente.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: true,
      entities: [Cliente, Apolice, Usuario],
      autoLoadEntities: false,
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
        // Configurações otimizadas para Neon
        max: 1,
        connectionTimeoutMillis: 0,
        idleTimeoutMillis: 30000,
      },
      logging: true,
    }),
    ClienteModule,
    ApoliceModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
