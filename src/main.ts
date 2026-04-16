import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('RiverGuard')
  .setDescription('Projeto RiverGuard')
  .setContact("River Technology","https://github.com/Grupo-03-Turma-JavaScript-13/RiverGuard","grupo_03-turma-javascript_13@outlook.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  process.env.TZ= '-03:00';

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
