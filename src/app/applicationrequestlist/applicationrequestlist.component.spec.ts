import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationrequestlistComponent } from './applicationrequestlist.component';

describe('ApplicationrequestlistComponent', () => {
  let component: ApplicationrequestlistComponent;
  let fixture: ComponentFixture<ApplicationrequestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationrequestlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
