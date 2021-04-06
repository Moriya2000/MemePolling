import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  constructor(public clientService:ClientService, public rout:Router) { }
  ngOnInit(){}

  Enter() 
  {
  this.clientService.GetEmailAddressPassword(this.clientService.newClient.EmailAddress!,this.clientService.newClient.Password!)
  .subscribe(data=>{
      if(data==1)
      {
        alert(" ברוך הבאה"+ " "+this.clientService.newClient.EmailAddress);
        this.clientService.conected=true
        this.clientService.clientConected=this.clientService.newClient;
        this.rout.navigate(['/Delivery']);
      }
      else{
        alert("משתמש לא קיים במערכת");
        this.rout.navigate(['/ClientRegister']);
        this.clientService.newClient=new Client;
      }
    },err=>{alert("שגיאה בהתחברות לשרת")})
  }
}
