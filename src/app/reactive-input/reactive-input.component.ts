import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor , NG_VALUE_ACCESSOR} from '@angular/forms';
import { InputTypes } from 'src/inputs';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.css']
})
export class ReactiveInputComponent 
implements OnInit, ControlValueAccessor, AfterViewInit  {

  @Input() type: InputTypes = 'text';
  @Input() placeholder = '';
  @Input() required = true;
  

  constructor() { }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
