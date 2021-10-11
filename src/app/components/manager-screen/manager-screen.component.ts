import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})
export class ManagerScreenComponent implements OnInit {

  constructor(public generalService: GeneralService, private router: Router) { }

  ngOnInit(): void {
  }
  navToAnotherComponent(path: string) {
    if (path === 'history')
      this.router.navigate(['/HistoryVoting'])
    else
      this.router.navigate(['/GivePermission'])
  }
}
