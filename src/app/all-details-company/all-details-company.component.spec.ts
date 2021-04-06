import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDetailsCompanyComponent } from './all-details-company.component';

describe('AllDetailsCompanyComponent', () => {
  let component: AllDetailsCompanyComponent;
  let fixture: ComponentFixture<AllDetailsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDetailsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDetailsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
