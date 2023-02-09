import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageviewController } from './controllers/pageview.controller';
import { PageviewRepository } from './repository/pageview.repository';
import { PageviewService } from './services/pageview.service';
import { PrismaClientService } from './services/prisma-client.service';

@Module({
  imports: [],
  controllers: [AppController, PageviewController],
  providers: [
    PrismaClientService,
    PageviewService,
    PageviewRepository,
    AppService,
  ],
})
export class AppModule {}
