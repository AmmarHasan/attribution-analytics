import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageviewRepository } from './repository/pageview.repository';
import { PageviewService } from './services/pageview.service';
import { PrismaClientService } from './services/prisma-client.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaClientService,
    PageviewService,
    PageviewRepository,
    AppService,
  ],
})
export class AppModule {}
