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
  public usernotfound: string ='';

  constructor(
    private fb: FormBuilder,
    public router : Router,
    public global: GlobalService,
    private http: HttpClient,
    ) {
    this.form = this.fb.group({
    });
  }

  ngOnInit(): void {
    this.http.get('/assets/my-form.json').subscribe((formData: JsonFormData | any) => {
      this.formData = formData;
    });
  }

  submitForm(event:any) {
    this.usernotfound = '';
    var userdata = this.global.userList.filter((x: any) => x.username == event.username);
    if (userdata.length > 0) {
      localStorage.setItem("userdetails", JSON.stringify(userdata[0]))
      this.router.navigateByUrl("/dashboard");
    } else {
      this.usernotfound = 'No user with username' + ' ' + event.username;
      var x:any = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  }

  sign(){
    this.router.navigateByUrl("/input");
  }

} 
