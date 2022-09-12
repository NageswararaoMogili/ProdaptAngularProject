import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonFormData } from '../input-text/input-text.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public formData!: JsonFormData;

  constructor(
    private fb: FormBuilder,
    public router : Router,
    public global: GlobalService,
    private http: HttpClient,

    ) {
    this.form = this.fb.group({
      username: ['', Validators.required],      
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.http.get('/assets/my-form.json').subscribe((formData: JsonFormData | any) => {
      this.formData = formData;
    });
  }

  submitForm(event:any) {
    console.log(event);
    
      var userdata= this.global.userList.filter((x:any)=> x.username == event.username);
      if(userdata.length>0){
        localStorage.setItem("userdetails", JSON.stringify(userdata[0]))
        this.router.navigateByUrl("/dashboard");
      }else{
        alert('No user with username'+ ' ' + event.username);
      }
      
    
  }

  sign(){
    this.router.navigateByUrl("/input");
  }

} 
