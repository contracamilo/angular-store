import { AbstractControl } from '@angular/forms';

export class OwnValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value < 10000) {
      return { invalid_price: true };
    }
    return null;
  }
}
