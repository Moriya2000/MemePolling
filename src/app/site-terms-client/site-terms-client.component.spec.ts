import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTermsClientComponent } from './site-terms-client.component';

describe('SiteTermsClientComponent', () => {
  let component: SiteTermsClientComponent;
  let fixture: ComponentFixture<SiteTermsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTermsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTermsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
