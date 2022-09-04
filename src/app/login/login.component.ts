import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public router : Router,
    public global: GlobalService
    ) {
    this.form = this.fb.group({
      username: ['', Validators.required],      
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.form.valid) {
      var userdata= this.global.userList.filter((x:any)=> x.username == this.form.value.username);
      if(userdata.length>0){
        localStorage.setItem("userdetails", JSON.stringify(userdata[0]))
        this.router.navigateByUrl("/dashboard");
      }else{
        alert('No user with username'+ ' ' + this.form.value.username);
      }
      
    } else {
        console.log('There is a problem with the form');
    }
  }

  sign(){
    this.router.navigateByUrl("/input");
  }

} 
