import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { genderValidate } from './validators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public fb: FormBuilder) {}
  aadharNumber:any=null;
  /*##################### Registration Form #####################*/
  validatorForm = this.fb.group({
    name: ['', [Validators.required]],
    gender:[null, [Validators.required, genderValidate]],
    aadharNumber:['', [Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/)]],
    panCardNo:['', [Validators.required, Validators.maxLength(10),
    Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
    mobileNumber: [null,[ Validators.required,
      Validators.pattern(/[6-9]{1}[0-9]{9}/),
      Validators.minLength(10), Validators.maxLength(10)]],

    
  })
  keyPress(event?:any){
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }

  }
  // Getter method to access form control
  get name() {
    return this.validatorForm.get('name');
  }
  
  // Submit Registration Form
  onSubmit() {
    if(!this.validatorForm.valid) {
      alert('Please enter your age!')
      return false;
    } else {
      alert(JSON.stringify(this.validatorForm.valid))
      // alert(this.validatorForm.value)
    }
  }
  mychange(event?:any) {
    const value= event?.target.value;
    if (value != null) {
      value.replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, value)
      .trim();
      console.log(value);
    }
  
   
  }
}
