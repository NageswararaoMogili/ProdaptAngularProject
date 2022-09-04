import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() UserName:any ='Test User';

  constructor() { }

  ngOnInit(): void {
  }
  addItem(event:any){
    console.log(event);
    
  }

}
