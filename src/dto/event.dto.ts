import { IsIn, IsString, IsUUID, Validate } from 'class-validator';
import { DateValidator } from 'src/common/class-validator/date-validator.constraint';
import { validEventNames } from 'src/common/constants';

export class EventDto {
  @IsIn(validEventNames)
  name!: string;

  @IsUUID()
  fingerprint!: string;

  @IsString()
  user_id!: string;

  @IsString()
  @Validate(DateValidator)
  created_at!: string;
}
