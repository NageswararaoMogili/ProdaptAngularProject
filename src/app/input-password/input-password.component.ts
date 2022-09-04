import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],      
      lastname: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm(){
    console.log('signup done');
    
  }

}
