import { FormControl, Validators,ValidatorFn, AbstractControl} from '@angular/forms';



export function genderValidate(control: AbstractControl): { [key: string]: boolean } | null {
  let val:boolean
  console.log(control.value)
  if ( control.value ==null || control.value == 'null') {
    val=  true
  }else {
    val=  false 

  }
return {'gender': val}
}

export function mobileValidation(control:AbstractControl):any | null
{
if(control.value ==null){
  return { 'mobile':true }
}
}