import { Component, EventEmitter, Input, Output } from '@angular/core';
import CONSTANTS_TEXT from 'src/app/core/constant/text.constant';
import { DataModel } from 'src/app/core/model/data';
const {
  list_title
} = CONSTANTS_TEXT
@Component({
  selector: 'shortly-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() link_list : DataModel[] = [];
  @Output() copy_button : EventEmitter<number> = new EventEmitter();

  readonly short_text : string = list_title;

  copyLink(id : number): void {
    this.copy_button.emit(id)
  }
}
