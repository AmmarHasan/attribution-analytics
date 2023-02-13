import { Injectable } from '@nestjs/common';
import { AttributionRepository, AttributionCreateInput } from 'src/repository/attribution.repository';
import { PageviewService } from './pageview.service';
import { Event, Prisma } from '@prisma/client';

@Injectable()
export class AttributionService {
  constructor(
    private readonly attributionRepository: AttributionRepository,
    private readonly pageviewService: PageviewService,
) {}

  async create(event: Event) {

    const firstTouchpoint = await this.pageviewService.getFirstTouchpoint(event.fingerprint);
    const lastTouchpoint = await this.pageviewService.getLastTouchpoint(event.fingerprint);

    return this.attributionRepository.create({
        event: {
            connect: {
                id: event.id
            }
        },
        firstTouchpoint: {
            connect: {
                id: firstTouchpoint?.id
            }
        },
        lastTouchpoint: {
            connect: {
                id: lastTouchpoint?.id
            }
        }
    });
  }

  async getSignupAttributionByUserId(userId: string) {
    return await this.attributionRepository.getSignupAttributionByUserId(userId)
  }
}
