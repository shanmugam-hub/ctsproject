import { FormControl } from '@angular/forms';

export function futureDateValidator(control: FormControl) {
  const currentDate = new Date();
  const selectedDate = new Date(control.value);

  if (selectedDate < currentDate) {
    return { pastDate: true };
  }

  return null; 
}
