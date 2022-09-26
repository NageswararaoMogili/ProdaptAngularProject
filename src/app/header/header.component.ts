import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedclass:any = "b";
  @Input() UserName:any ='Test User';

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  addItem(event:any){
    this.selectedclass=event;
    console.log(event);
    
  }
  logout(){
    this.router.navigateByUrl('/login');
  }

}
