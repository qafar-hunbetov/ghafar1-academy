import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesComponent]
    });
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class AboutUsComponent {
  faWifi = faWifi;
  faStar = faStar;
  faBoxOpen = faBoxOpen;
  data: any;
  images = [
    { source: 'https://images.pexels.com/photos/6913383/pexels-photo-6913383.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Image 1' },
    { source: 'https://images.pexels.com/photos/8180758/pexels-photo-8180758.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Image 2' },
    { source: 'https://images.pexels.com/photos/6874060/pexels-photo-6874060.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Image 3' },
    { source: 'https://images.pexels.com/photos/6874060/pexels-photo-6874060.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Image 3' },
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(formData: any): void {
    this.dialog.open(ServicesComponent, {
      data: {
        formData: formData,
      },
    });
  }
}