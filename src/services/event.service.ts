import { Injectable } from '@nestjs/common';
import { EventDto } from 'src/dto/event.dto';
import { EventRepository } from 'src/repository/event.repository';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  create(eventDto: EventDto) {
    const { name, fingerprint, user_id, created_at } = eventDto;

    return this.eventRepository.create({
      name,
      fingerprint,
      userId: user_id,
      createdAt: new Date(created_at),
    });
  }

  async getAllByFingerprint(fingerprint: string) {
    return await this.eventRepository.getAllByFingerprint(fingerprint);
  }
}
