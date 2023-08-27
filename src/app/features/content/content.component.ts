import { Component } from '@angular/core';
import CONSTANTS_LOGO from 'src/app/core/constant/logo.constant';
import CONSTANTS_TEXT from 'src/app/core/constant/text.constant';
const {
  content_text,
  content_title,
  brand_title,
  brand_recognition,
  detail_title,
  detail_records,
  customizable_title,
  fully_customizable,
} = CONSTANTS_TEXT;

const {brand_logo,record_logo,custom_logo} = CONSTANTS_LOGO
@Component({
  selector: 'shortly-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  readonly title: string = content_title;
  readonly text: string = content_text;

  readonly brand_logo: string = brand_logo;
  readonly brand_title: string = brand_title;
  readonly brand_text: string = brand_recognition;

  readonly detailed_logo: string = record_logo;
  readonly detailed_title: string = detail_title;
  readonly detail_record:string = detail_records;

  readonly customizable_logo :string = custom_logo;
  readonly customizable_title :string = customizable_title;
  readonly fully_customizable :string = fully_customizable;

}
