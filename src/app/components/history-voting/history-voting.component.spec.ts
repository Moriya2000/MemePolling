import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryVotingComponent } from './history-voting.component';

describe('HistoryVotingComponent', () => {
  let component: HistoryVotingComponent;
  let fixture: ComponentFixture<HistoryVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
