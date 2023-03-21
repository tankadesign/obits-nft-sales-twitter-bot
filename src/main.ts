import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('ALCHEMY_API_KEY: ' + process.env.ALCHEMY_API_KEY);
  console.log('TWITTER_API_KEY: ' + process.env.TWITTER_API_KEY);
  console.log('TWITTER_API_KEY_SECRET: ' + process.env.TWITTER_API_KEY_SECRET);
  console.log(
    'TWITTER_ACCESS_TOKEN_KEY: ' + process.env.TWITTER_ACCESS_TOKEN_KEY,
  );
  console.log(
    'TWITTER_ACCESS_TOKEN_SECRET: ' + process.env.TWITTER_ACCESS_TOKEN_SECRET,
  );
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 8080);
}

bootstrap();
