import { Component, ElementRef, ViewChild } from '@angular/core';
import CONSTANTS_LOGO from 'src/app/core/constant/logo.constant';
import CONSTANTS_TEXT from 'src/app/core/constant/text.constant';
import { Navigation } from 'src/app/core/model/navigation';
const {
  shortly_logo,
  hamburger_Logo,
  close_logo
} = CONSTANTS_LOGO

const {
  login,
  signup
} = CONSTANTS_TEXT
@Component({
  selector: 'shortly-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @ViewChild('headerNavigation') primaryNavigation: ElementRef = {} as ElementRef;
  readonly logo: string = shortly_logo;
  readonly hum: string = hamburger_Logo;
  readonly close: string = close_logo;
  readonly login_text: string = login;
  readonly signup_text: string = signup;

  readonly nav: Navigation[] = [
    {
      label: "Features",
      link: ""
    },
    {
      label: "Pricing",
      link: ""
    },
    {
      label: "Resources",
      link: ""
    },
    {
      label: "AAC",
      link: ""
    },
  ];

  navClick() {
    this.primaryNavigation.nativeElement.toggleAttribute(
      'display-mobile-nav'
    );
  }
}
