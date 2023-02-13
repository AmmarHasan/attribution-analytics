import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AttributionService } from 'src/services/attribution.service';

@Controller('attribution')
export class AttributionController {
  constructor(private readonly attributionService: AttributionService) {}

  @Get(':user_id')
  getSignupAttributionByUserId(@Param('user_id') userId: string) {
    return this.attributionService.getSignupAttributionByUserId(userId);
  }
}
