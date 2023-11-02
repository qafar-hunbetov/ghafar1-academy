import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.scss']
})
export class SubmitDialogComponent {
  formData: any 
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(data);
    this.formData=data.formData
      }
}
