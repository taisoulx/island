import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 允许跨域
  app.enableCors()
  //swagger 配置
  const options = new DocumentBuilder()
    .setTitle('Island管理后台api')
    .setDescription('接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.ADMIN_PORT || 3000;
  await app.listen(PORT);
  console.log(`app is listening:http://localhost:${PORT}/api-docs`);
}
bootstrap();
