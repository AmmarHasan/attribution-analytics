import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PageviewService } from 'src/services/pageview.service';
import { PageViewDto } from 'src/dto/pageview.dto';

@Controller('pageview')
export class PageviewController {
  constructor(private readonly pageviewService: PageviewService) {}

  @Post()
  create(@Body() pageviewData: PageViewDto) {
    return this.pageviewService.create(pageviewData);
  }

  @Get(':fingerprint')
  getAllByFingerprint(@Param('fingerprint') fingerprint: string) {
    return this.pageviewService.getAllByFingerprint(fingerprint);
  }
}
