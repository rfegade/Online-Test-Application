import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  //model: any = {}
  submitted:boolean=false;
  success: boolean=false;
  router: any;

  constructor(private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
  }
  
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.valid){
      console.log('User is registered successfully');
      this._router.navigate(['quiz']);
    }
    this.success = true;
  }

}
