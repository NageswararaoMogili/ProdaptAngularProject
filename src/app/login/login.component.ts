import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  router: any;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],      
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.form.valid) {
        console.log(this.form.getRawValue());
    } else {
        console.log('There is a problem with the form');
    }
  }

  sign(){
    this.router.navigateByUrl("/input");
  }

} 
