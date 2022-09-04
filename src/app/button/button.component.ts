import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  public buttonText = '';

  @Input()
  
  set text(name: string) {
		this.buttonText = name.toUpperCase();
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() color: string = '0068B4';
	@Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

	

  constructor() { }

  onClick() {
		this.btnClick.emit();
	}

  ngOnInit(): void {
  }

}
