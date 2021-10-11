import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-history-voting',
  templateUrl: './history-voting.component.html',
  styleUrls: ['./history-voting.component.css']
})
export class HistoryVotingComponent implements OnInit {

  constructor(private generalService: GeneralService) {
    this.getHistory()
  }
  votingHistory: any
  ngOnInit(): void {
  }

  getHistory() {
    this.generalService.votingHistory().subscribe(data => {
      this.votingHistory = data
      console.log(data);
      if (this.votingHistory.success)
        console.log(this.votingHistory.error);
      else
        this.votingHistory = this.votingHistory.votingHistory
    }
      , err => console.log(err))
  }
}
