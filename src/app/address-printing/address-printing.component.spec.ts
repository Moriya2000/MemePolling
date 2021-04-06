import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPrintingComponent } from './address-printing.component';

describe('AddressPrintingComponent', () => {
  let component: AddressPrintingComponent;
  let fixture: ComponentFixture<AddressPrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressPrintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
