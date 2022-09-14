import { Router } from '@angular/router';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonFormData } from '../input-text/input-text.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  public formData!: JsonFormData;

  constructor(
    private fb: FormBuilder,
    public global: GlobalService,
    public router: Router,
    private http: HttpClient

    ) {
    this.form = this.fb.group({
      // id: [Number, [Validators.required]],      
      // firstname: ['', [Validators.required]],      
      // lastname: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.http.get('/assets/signup-form.json').subscribe((formData: JsonFormData | any) => {
      this.formData = formData;
    });
  }

  submitForm(event:any){
    var userdata = event;
    if(userdata.password != userdata.confirmpassword){
        alert('password is not matching')
    }else{
    userdata['name'] = userdata.firstname + " " + userdata.lastname;
    localStorage.setItem("userdetails",JSON.stringify(userdata));
    this.router.navigateByUrl('/dashboard')
    } 
    
  }

}
