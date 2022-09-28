import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor , NG_VALUE_ACCESSOR} from '@angular/forms';
import { InputTypes } from 'src/inputs';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReactiveInputComponent),
      multi: true,
    },
  ]
})
export class ReactiveInputComponent 
implements ControlValueAccessor, AfterViewInit  {
  
  @HostBinding('class.llac-input') reactiveInputClass = true;

  @Input() type: InputTypes = 'text';
  @Input() placeholder = '';
  @Input() labelname = '';
  @Input() required = true;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() minLength?: number = 0;
  @Input() maxLength?: number = 999;
  @Input() requiredText? = '';
  @Input() patternChange = '';
  @Input() errorTextColor? = false;
  @Input() id = '';
  value = '';
  @Input() classname? = '';
  @Input() lableclassname= '';
  @Output() inputchange: EventEmitter<any> = new EventEmitter();


  onChange!: (value: string) => void;
  onTouched!: () => void;
  qmAttribute: any;
  

  constructor(private readonly el: ElementRef) {}

  /**
   * @param value - string
   * It will write the value we want to the formControl
   */
   writeValue(value: string): void {
    this.value = value;
  }

  /**
   * @param fn - The callback function to register
   * When the value changes in the UI, call the registered
   * function to allow the forms API to update itself:
   */
  registerOnChange(fn: VoidFunction): void {
    console.log(fn);
    this.onChange = fn;
  }

  /**
   * @param fn - The callback function to register
   * On blur (or equivalent), your class should call the registered function to allow
   * the forms API to update itself:
   */
  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  // writeValue(obj: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // registerOnChange(fn: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // registerOnTouched(fn: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
  ngAfterViewInit(): void {
    // const attrName = this.el.nativeElement.querySelector('input');
    // if (this.qmAttribute !== '') attrName.setAttribute(this.qmAttribute, '');
  }

  ngOnInit(): void {
  }

}
