import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttributionController } from './controllers/attribution.controller';
import { EventController } from './controllers/event.controller';
import { PageviewController } from './controllers/pageview.controller';
import { AttributionRepository } from './repository/attribution.repository';
import { EventRepository } from './repository/event.repository';
import { PageviewRepository } from './repository/pageview.repository';
import { AttributionService } from './services/attribution.service';
import { EventService } from './services/event.service';
import { PageviewService } from './services/pageview.service';
import { PrismaClientService } from './services/prisma-client.service';

@Module({
  imports: [],
  controllers: [AppController, PageviewController, EventController, AttributionController],
  providers: [
    PrismaClientService,
    EventService,
    EventRepository,
    PageviewService,
    PageviewRepository,
    AttributionService,
    AttributionRepository,
    AppService,
  ],
})
export class AppModule {}
