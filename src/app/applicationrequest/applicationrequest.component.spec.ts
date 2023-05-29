import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationrequestComponent } from './applicationrequest.component';

describe('ApplicationrequestComponent', () => {
  let component: ApplicationrequestComponent;
  let fixture: ComponentFixture<ApplicationrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
