import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenName = ['Chris', 'Anna'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [ Validators.required, Validators.email ])
      }),
      'gender': new FormControl("male"),
      'hobbies': new FormArray([])
    });
  }
  
  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }
  
  // Custom Validator automatically execute by angular
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if( this.forbiddenName.indexOf(control.value) != -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }
}