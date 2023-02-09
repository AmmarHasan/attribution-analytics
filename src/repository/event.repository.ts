import { PrismaClientService } from 'src/services/prisma-client.service';

import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';

@Injectable()
export class EventRepository {
  constructor(private readonly client: PrismaClientService) {}

  async create(eventCreateInput: Prisma.EventCreateInput): Promise<Event> {
    return await this.client.event.create({
      data: eventCreateInput,
    });
  }

  async getAllByFingerprint(fingerprint: string): Promise<Event[]> {
    return await this.client.event.findMany({
      where: { fingerprint },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
