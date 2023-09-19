import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoPagesComponent } from './moto-pages.component';

describe('MotoPagesComponent', () => {
  let component: MotoPagesComponent;
  let fixture: ComponentFixture<MotoPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotoPagesComponent]
    });
    fixture = TestBed.createComponent(MotoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
