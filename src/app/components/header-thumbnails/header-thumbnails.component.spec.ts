import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThumbnailsComponent } from './header-thumbnails.component';

describe('HeaderThumbnailsComponent', () => {
  let component: HeaderThumbnailsComponent;
  let fixture: ComponentFixture<HeaderThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
