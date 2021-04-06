import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTermCompanyComponent } from './site-term-company.component';

describe('SiteTermCompanyComponent', () => {
  let component: SiteTermCompanyComponent;
  let fixture: ComponentFixture<SiteTermCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTermCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTermCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
