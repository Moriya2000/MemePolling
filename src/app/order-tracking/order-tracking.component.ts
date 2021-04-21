import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/Client';
import { Order } from '../classes/Order';
import { ClientService } from '../services/client.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  constructor(public clientService: ClientService, public orderService: OrderService) { }
  showOrHide:boolean=true;
  ngOnInit(): void {
  }
  //מחיקת משתמש
  // delete() {
  //   debugger
  //   this.clientService.GetRemoveClient(this.clientService.clientConected.IdClient!).subscribe(data => {
  //     alert("המשתמש הוסר בהצלחה")
  //   }, err => { alert("error" + err) })

  // }
  MyOrder() {
    debugger
    this.showOrHide=false;

    this.orderService.GetAllIdOrder(this.clientService.clientConected.IdClient!).subscribe(data => 
   {   debugger

this.orderService.listOrder=data
      alert("השליפה הצליחה");
    })
    }

}