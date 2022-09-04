import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() bgtheme:any;
  @Output() changetheme = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(value: string) {

    this.changetheme.emit(value);
  }
  
 
}
