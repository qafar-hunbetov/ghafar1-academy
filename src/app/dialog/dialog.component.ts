import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  formData: any 
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(data);
    this.formData=data.formData
      }
}
