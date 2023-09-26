import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutForComponent } from './about-for.component';

describe('AboutForComponent', () => {
  let component: AboutForComponent;
  let fixture: ComponentFixture<AboutForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutForComponent]
    });
    fixture = TestBed.createComponent(AboutForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
