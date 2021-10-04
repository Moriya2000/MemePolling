import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesVotingComponent } from './memes-voting.component';

describe('MemesVotingComponent', () => {
  let component: MemesVotingComponent;
  let fixture: ComponentFixture<MemesVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemesVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
