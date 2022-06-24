import { FormControl, Validators,ValidatorFn, AbstractControl} from '@angular/forms';



export function genderValidate(control: AbstractControl): { [key: string]: boolean } | null {
  if ( control.value ==null || control.value == 'null') {
    return { 'gender': true };
  }
 
}

export function mobileValidation(control:AbstractControl):any | null
{
if(control.value ==null){
  return { 'mobile':true }
}
}