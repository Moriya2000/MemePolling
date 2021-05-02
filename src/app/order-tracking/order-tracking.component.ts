import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { DestinationsRouteService } from '../services/destinations-route.service';
import { OrderService } from '../services/order.service';
import { TakingDeliveryService } from '../services/taking-delivery.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  constructor(public clientService: ClientService, public takingDeliveryService: TakingDeliveryService, public orderService: OrderService, public destinationsRouteService: DestinationsRouteService) { }
  showOrHide: boolean = true;
  a: number = 0;

  date: Date = new Date();
  ngOnInit(): void {
    debugger
    this.destinationsRouteService.GetDestinationsRoute().subscribe(data => this.destinationsRouteService.listDestinationsRoute = data)
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
    this.showOrHide = false;
    this.orderService.GetAllIdOrder(this.clientService.clientConected.IdClient!).subscribe(data => {
      debugger
      this.orderService.listOrder = data
      // alert("השליפה הצליחה");
    })
  }

  OrderTrack(id: number) {

    debugger

    this.a = 1;
    if (this.destinationsRouteService.listDestinationsRoute.find(x => x.OrderID == id)) {
      this.a = 2;
    let x = this.orderService.listOrder.find(x => x.OrderID == id)
      if (x!.OrderDate! <= this.date)
      this.a = 3;

    }
   }
  
}
