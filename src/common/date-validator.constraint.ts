import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

// @ValidatorConstraint({ name: 'customText', async: false })
@ValidatorConstraint()
export class DateValidator implements ValidatorConstraintInterface {
  validate(dateString: string) {
    const date = new Date(dateString);
    return date.toString() !== 'Invalid Date';
  }

  defaultMessage() {
    return 'Date string ($value) is invalid. "YYYY-MM-DD hh:mm:ss.sss UTC" is the correct format.';
  }
}
