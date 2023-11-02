import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 40.446808, lng:49.989046 };
  zoom = 13
  marker: MarkerProperties = 
    { position: { lat: 40.446808, lng: 49.989046 }}// Eiffel Tower
  ;

  constructor(public dialog: MatDialog) {}

      openDialog(formData: any): void {
        this.dialog.open(SubmitDialogComponent, {
      width: '500px',          data: {
            formData: formData,
          },
        });
      }
}






