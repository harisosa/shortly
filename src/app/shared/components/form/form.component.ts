import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CONSTANTS_TEXT from 'src/app/core/constant/text.constant';

const {error_input,button_short,link_placeholder} = CONSTANTS_TEXT
@Component({
  selector: 'shortly-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  readonly placeholder : string = link_placeholder;
  readonly button_text : string = button_short;
  readonly error_message : string = error_input;
  link_form: FormGroup;
  @Output() submit_action : EventEmitter<string> = new EventEmitter()
  constructor(private fb: FormBuilder) {
    this.link_form = this.fb.group({
      link: ['', Validators.required],
    });
  }
  onSubmit(){
    if(this.link_form.valid){
      this.submit_action.emit(this.link_form.value.link);
      this.link_form.reset();
    }else{
      this.link_form.controls['link'].markAsTouched();
    }
  }
}
