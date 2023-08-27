import { Component } from '@angular/core';
import CONSTANTS_LOGO from 'src/app/core/constant/logo.constant';
import { SocialMedia } from 'src/app/core/model/navigation';

const {
  white_logo,
  instagram_logo,
  pinterest_logo,
  twitter_logo,
  facebook_logo
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

  readonly social_media :SocialMedia[] =[
    {
      src:instagram_logo,
      alt:'instagram-logo'
    },
    {
      src:pinterest_logo,
      alt:'pinterest-logo'
    },
    {
      src:twitter_logo,
      alt:'twitter-logo'
    },
    {
      src:facebook_logo,
      alt:'facebook-logo'
    },

  ]
}
