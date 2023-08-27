import { Component } from '@angular/core';
import CONSTANTS_LOGO from 'src/app/core/constant/logo.constant';
import CONSTANTS_TEXT from 'src/app/core/constant/text.constant';

const {illustration_logo} = CONSTANTS_LOGO
const {banner_title,benner_text,get_started}= CONSTANTS_TEXT
@Component({
  selector: 'shortly-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  readonly title : string = banner_title;
  readonly text : string = benner_text;
  readonly logo : string = illustration_logo;
  readonly button_text:string = get_started;
}
