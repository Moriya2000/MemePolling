import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  constructor(public clientService:ClientService) { }

  ngOnInit(): void {
  }
  //מחיקת משתמש
  delete() 
  {
    debugger
    this.clientService.GetRemoveClient(this.clientService.clientConected.IdClient!).subscribe(data =>{
          alert("הבגד הוסר בהצלחה")
    },err=>{alert("error" + err)})
    
}}
