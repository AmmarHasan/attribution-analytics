import { Injectable } from '@nestjs/common';
import { PageViewDto } from './dto/pageview.dto';

@Injectable()
export class AppService {
  pageviewListener(data: PageViewDto) {
    return data;
  }
}
