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
  displayupdate: string = 'none';
  public formData!: JsonFormData;

  constructor(
    public global : GlobalService,
    private fb: FormBuilder,
    private http: HttpClient,

  ) { 
    this.addTodoListForm = this.fb.group({
      userId: [this.userDetails.id],      
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      completed: [false]
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
    });

    this.userDetails= JSON.parse(localStorage.getItem("userdetails")|| "null");
    this.addTodoListForm.patchValue({
      userId:this.userDetails.id
    })
    this.todoList = this.global.todoList.filter((x:any)=> x.userId === this.userDetails.id);
    
  }
  
  showList(){
    if (this.showCompleted) {
     this.todoList = this.global.todoList.filter((x:any)=>x.userId === this.userDetails.id && x.completed === true);
    } else {
      this.todoList = this.global.todoList.filter((x:any)=> x.userId === this.userDetails.id);
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
  }
  submitUpdateForm() {
    this.todoList[this.updateTodoListForm.value.index] = this.updateTodoListForm.value;
  }
  submitForm(event:any){
    console.log(this.addTodoListForm.value);
    this.global.todoList.push(this.addTodoListForm.value);
    this.onCloseHandled();
    this.ngOnInit();

    // Here need to impliment the HTTP call
  }
  update(item:any,index:any){
    console.log(item,index);
    this.displayupdate = "block";
    this.updateTodoListForm.patchValue({
      userId:item.userId,
      id:item.id,
      title:item.title,
      completed:item.completed,
      index:index
    });
  }
}
function showList(): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}

