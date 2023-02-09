import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './controllers/event.controller';
import { PageviewController } from './controllers/pageview.controller';
import { EventRepository } from './repository/event.repository';
import { PageviewRepository } from './repository/pageview.repository';
import { PageviewService } from './services/pageview.service';
import { PrismaClientService } from './services/prisma-client.service';

@Module({
  imports: [],
  controllers: [AppController, PageviewController, EventController],
  providers: [
    PrismaClientService,
    EventRepository,
    PageviewService,
    PageviewRepository,
    AppService,
  ],
})
export class AppModule {}
