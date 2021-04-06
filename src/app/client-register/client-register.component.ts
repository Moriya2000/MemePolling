import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})

export class ClientRegisterComponent implements OnInit {

  constructor(public clientService:ClientService, public rout:Router) {}
  ngOnInit(){}
 
  //הוספת לקוח
  addClient()
  {
    this.clientService.GetAddClient().subscribe(data=>{
    alert("תודה שנרשמת אצלנו")
    this.rout.navigate(['/Home']);
    },err=>{alert("error" + err)})
    this.clientService.newClient=new Client;
  }
}