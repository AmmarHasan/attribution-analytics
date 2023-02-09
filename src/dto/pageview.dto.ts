import { IsString, IsUrl, IsUUID, Validate } from 'class-validator';
import { IsNullable } from 'src/common/class-validator/nullable.decorator';
import { DateValidator } from 'src/common/class-validator/date-validator.constraint';

export class PageViewDto {
  @IsUUID()
  fingerprint!: string;

  @IsString({ message: 'user_id must be a string or null' })
  @IsNullable()
  user_id!: string | null;

  @IsUrl()
  url!: string;

  @IsNullable()
  @IsUrl({}, { message: 'referrer_url must be a URL address or null' })
  referrer_url!: string | null;

  @IsString()
  @Validate(DateValidator)
  created_at!: string;
}
