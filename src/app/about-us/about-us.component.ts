import { Component } from '@angular/core';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  faWifi=faWifi
  faStar=faStar
  faBoxOpen=faBoxOpen

  images = [
        { source: '/https://demoxml.com/html/carmax/images/partner-logo3.png', alt: 'Image 1' },
        { source:  '/assets/img/car-13.png', alt: 'Image 2' },
        { source: '/assets/img/car-14.png', alt: 'Image 3' },
        { source: '/assets/img/car-15.png', alt: 'Image 3' },
    { source: '/assets/img/car-12.png', alt: 'Image 1' }
      ];
        
 
      constructor(public dialog: MatDialog) {}

      openDialog(formData: any): void {
        this.dialog.open(DialogComponent, {
      width: '500px',          data: {
            formData: formData,
          },
        });
      }
    }
    


 



  