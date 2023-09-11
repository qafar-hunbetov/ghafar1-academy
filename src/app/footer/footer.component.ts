import { Component } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;
  faTwitter=faTwitter
  faFacebookF=faFacebookF
  faGooglePlus=faGooglePlusG
  faYoutube=faYoutube
  faPinterestP=faPinterestP
}
