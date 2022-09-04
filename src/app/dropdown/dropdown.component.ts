import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Output() changetheme = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(value: string) {
    
    this.changetheme.emit(value);
  }
  
 
}
