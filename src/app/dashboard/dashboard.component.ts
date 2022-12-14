import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';
import { JsonFormData } from '../input-text/input-text.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails:any ={};
  showCompleted:boolean= false;
  todoList :any= [];
  display = "none";
  addTodoListForm: FormGroup;
  updateTodoListForm: FormGroup;
  displayupdate: string = 'block';
  public formData!: JsonFormData;
  updateformData: any;
  showedit= false;
  constructor(
    public global : GlobalService,
    private fb: FormBuilder,
    private http: HttpClient,

  ) { 
    this.addTodoListForm = this.fb.group({
      // userId: [this.userDetails.id],      
      // id: ['', [Validators.required]],
      // title: ['', [Validators.required]],
      // completed: [false]
    });
    this.updateTodoListForm = this.fb.group({
      userId: [this.userDetails.id],      
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      index: ['', [Validators.required]],
      completed: [false]
    });
  }

  ngOnInit(): void {
    this.http.get('/assets/todoform.json').subscribe((formData: JsonFormData | any) => {
      this.formData = formData;
      this.updateformData = formData;
    });
    this.getTodoList();
  }
  getTodoList(){
    this.userDetails= JSON.parse(localStorage.getItem("userdetails")|| "null");
    this.addTodoListForm.patchValue({
      userId:this.userDetails.id
    })
    this.todoList = this.global.todoList.filter((x:any)=> x.userId == this.userDetails.id);
  }
  
  showList(){
    if (this.showCompleted) {
     this.todoList = this.global.todoList.filter((x:any)=>x.userId == this.userDetails.id && x.completed === true);
    } else {
      this.todoList = this.global.todoList.filter((x:any)=> x.userId == this.userDetails.id);
    }
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onCloseUpdateHandled() {
    this.todoList[this.updateTodoListForm.value.index] = this.updateTodoListForm.value;
    this.showedit = false;
  }
  submitUpdateForm() {
    this.todoList[this.updateTodoListForm.value.index] = this.updateTodoListForm.value;
    this.showedit = false;

  }
  submitForm(event:any){
    console.log(event);
    event["completed"] = false;
    this.global.todoList.push(event);
    this.onCloseHandled();
    this.getTodoList();

    // Here need to impliment the HTTP call
  }
  update(item:any,index:any){
    console.log(this.updateformData);
    this.showedit = true;
    this.updateTodoListForm.patchValue({
      userId:item.userId,
      id:item.id,
      title:item.title,
      completed:item.completed,
      index:index
    });
  }
}

