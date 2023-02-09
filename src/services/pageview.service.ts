import { Injectable } from '@nestjs/common';
import { PageViewDto } from 'src/dto/pageview.dto';
import { PageviewRepository } from 'src/repository/pageview.repository';
import { extractUtmParams, getChannel } from 'src/common/helpers';

@Injectable()
export class PageviewService {
  constructor(private readonly pageviewRepository: PageviewRepository) {}

  create(pageviewDto: PageViewDto) {
    const { created_at, fingerprint, referrer_url, url, user_id } = pageviewDto;
    const { utm_campaign, utm_content, utm_medium, utm_source } =
      extractUtmParams(url);

    return this.pageviewRepository.create({
      fingerprint,
      url,
      createdAt: new Date(created_at),
      referrerUrl: referrer_url,
      userId: user_id,
      utmCampaign: utm_campaign,
      utmContent: utm_content,
      utmMedium: utm_medium,
      utmSource: utm_source,
      channel: getChannel(pageviewDto),
    });
  }

  async getAllByFingerprint(fingerprint: string) {
    return await this.pageviewRepository.getAllByFingerprint(fingerprint);
  }
}
