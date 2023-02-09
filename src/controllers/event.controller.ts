import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventDto } from 'src/dto/event.dto';

const data: EventDto[] = [];

@Controller('event')
export class EventController {
  @Post()
  create(@Body() eventData: EventDto) {
    data.push(eventData);
    return eventData;
  }

  @Get(':fingerprint')
  getAllByFingerprint(@Param('fingerprint') fingerprint: string) {
    return data;
  }
}
