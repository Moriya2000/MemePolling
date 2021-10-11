import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-give-permission',
  templateUrl: './give-permission.component.html',
  styleUrls: ['./give-permission.component.css']
})
export class GivePermissionComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  clickSuccess:boolean=false
  clickErr:boolean=false
  users: any
  
  ngOnInit(): void {
    this.generalService.getUsers().subscribe(data => {
      this.users = data,
      this.users = this.users.users
      console.log(data)
    }
      , err => console.log(err))
  }

  givePermission(userId: any) {
    this.generalService.givePermission(userId).subscribe(res =>{ console.log(res)
    this.clickSuccess=true}
      , err => {console.log(err); this.clickSuccess=false; this.clickErr=true})
  }
}
