import { Injectable } from '@nestjs/common';
import { EventDto } from 'src/dto/event.dto';
import { AttributionService } from 'src/services/attribution.service';
import { EventRepository } from 'src/repository/event.repository';

@Injectable()
export class EventService {
  constructor(
    private readonly attributionService: AttributionService,
    private readonly eventRepository: EventRepository
  ) {}

  async create(eventDto: EventDto) {
    const event = {
      ...eventDto,
      created_at: new Date(eventDto.created_at)
    };
    
    const eventRecord = await this.eventRepository.create(event);
    
    this.attributionService.create(eventRecord);

    return eventRecord;
  }

  async getAllByFingerprint(fingerprint: string) {
    return await this.eventRepository.getAllByFingerprint(fingerprint);
  }
}
