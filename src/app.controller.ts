import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PageViewDto } from './dto/pageview.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/pageview')
  pageviewListener(@Body() data: PageViewDto) {
    return this.appService.pageviewListener(data);
  }
}
