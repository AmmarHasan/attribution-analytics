import { PrismaClientService } from 'src/services/prisma-client.service';

import { Injectable } from '@nestjs/common';
import { ChannelEnum, Pageview, Prisma } from '@prisma/client';

@Injectable()
export class PageviewRepository {
  constructor(private readonly client: PrismaClientService) {}

  async create(
    pageviewCreateInput: Prisma.PageviewCreateInput,
  ): Promise<Pageview> {
    return await this.client.pageview.create({
      data: pageviewCreateInput,
    });
  }

  async getAllByFingerprint(fingerprint: string): Promise<Pageview[]> {
    return await this.client.pageview.findMany({
      where: { fingerprint },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}

export type PageviewCreateInput = Prisma.PageviewCreateInput;
export { ChannelEnum };
