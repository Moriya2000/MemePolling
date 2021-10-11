import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public generalService:GeneralService, private router:Router) { }

  ngOnInit(): void {
  }

  clickOut()
  {
    this.router.navigate(['/MemesVoting'])
    this.generalService.conected=false;
    this.generalService.typeUserClient=false;
    this.generalService.typeUserManager=false;
    this.generalService.typeUserWithPermission=false;
  }
}
