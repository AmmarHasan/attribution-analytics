import { Injectable } from '@nestjs/common';
import { PageViewDto } from 'src/dto/pageview.dto';
import { PageviewRepository } from 'src/repository/pageview.repository';
import { extractUtmParams, getChannel } from 'src/common/helpers';

@Injectable()
export class PageviewService {
  constructor(private readonly pageviewRepository: PageviewRepository) {}

  create(pageviewDto: PageViewDto) {
    const utm_params = extractUtmParams(pageviewDto.url);
    const created_at = new Date(pageviewDto.created_at);

    return this.pageviewRepository.create({
      ...pageviewDto,
      ...utm_params,
      created_at,
      channel: getChannel(pageviewDto),
    });
  }

  getFirstTouchpoint(fingerprint: string) {
    return this.pageviewRepository.getFirstTouchpoint(fingerprint);
  }

  getLastTouchpoint(fingerprint: string) {
    return this.pageviewRepository.getLastTouchpoint(fingerprint);
  }
  
  getAllByFingerprint(fingerprint: string) {
    return this.pageviewRepository.getAllByFingerprint(fingerprint);
  }
}
