import { PrismaClientService } from 'src/services/prisma-client.service';

import { Injectable } from '@nestjs/common';
import { Attribution, Prisma } from '@prisma/client';
import { validEventNames } from 'src/common/constants';

@Injectable()
export class AttributionRepository {
  constructor(private readonly client: PrismaClientService) {}

  async create(attributionCreateInput: Prisma.AttributionCreateInput): Promise<Attribution> {
    return await this.client.attribution.create({
      data: attributionCreateInput,
    });
  }
  
  async getSignupAttributionByUserId(userId: string): Promise<Attribution | null> {
    return await this.client.attribution.findFirst({
      where: {
        event: {
          user_id: {
            equals: userId
          },
          name: {
            equals: validEventNames.SIGNUP
          }
        }
      },
      include: {
        event: true,
        firstTouchpoint: true,
        lastTouchpoint: true
      }
    });
  }

}

export type AttributionCreateInput = Prisma.AttributionCreateInput