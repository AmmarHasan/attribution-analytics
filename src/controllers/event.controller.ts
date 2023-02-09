import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventDto } from 'src/dto/event.dto';
import { EventService } from 'src/services/event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}
  @Post()
  create(@Body() eventData: EventDto) {
    return this.eventService.create(eventData);
  }

  @Get(':fingerprint')
  getAllByFingerprint(@Param('fingerprint') fingerprint: string) {
    return this.eventService.getAllByFingerprint(fingerprint);
  }
}
