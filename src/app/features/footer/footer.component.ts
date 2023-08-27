import { Component } from '@angular/core';
import CONSTANTS_LOGO from 'src/app/core/constant/logo.constant';

const {
  white_logo,
} = CONSTANTS_LOGO

@Component({
  selector: 'shortly-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly logo : string = white_logo;
  readonly footer_text : string[]=[
    "Features",
    "Link Shortening",
    "Branded Links",
    "Analytics",
    "Resources",
    "Blog",
    "Developers",
    "Support",
    "Company",
    "About",
    "Our Team",
    "Careers",
    "Contact"
  ]
}
