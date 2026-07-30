import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = parseInt(process.env.PORT || '3001', 10);
  const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: corsOrigin.split(',').map(o => o.trim()),
    credentials: true
  });

  const config = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('APIs for Irwin Braganza\'s engineering portfolio')
    .setVersion('1.0.0')
    .addTag('health', 'Health checks')
    .addTag('profile', 'Profile information')
    .addTag('projects', 'Case studies and projects')
    .addTag('architecture', 'Architecture and technologies')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port, '0.0.0.0');
  console.log(`Portfolio API running on http://0.0.0.0:${port}`);
  console.log(`Swagger documentation available at http://0.0.0.0:${port}/api/docs`);
}

bootstrap().catch(err => {
  console.error('Failed to start API', err);
  process.exit(1);
});
