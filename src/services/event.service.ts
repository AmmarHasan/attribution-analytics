import { Injectable } from '@nestjs/common';
import { EventDto } from 'src/dto/event.dto';
import { EventRepository } from 'src/repository/event.repository';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  create(eventDto: EventDto) {
    const event = {
      ...eventDto,
      created_at: new Date(eventDto.created_at)
    };
    

    return this.eventRepository.create(event);
  }

  async getAllByFingerprint(fingerprint: string) {
    return await this.eventRepository.getAllByFingerprint(fingerprint);
  }
}
