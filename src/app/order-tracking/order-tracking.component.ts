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
 bool:boolean=false
 orderTrack:number=0
  // date:Date=new Date()
  
  ngOnInit(): void {
    debugger
    this.destinationsRouteService.GetDestinationsRoute().subscribe(data => this.destinationsRouteService.listDestinationsRoute = data)
  
    // this.showOrHide = false;
    this.orderService.GetAllIdOrder(this.clientService.clientConected.IdClient!).subscribe(data => {
      debugger
      this.orderService.listOrder = data
  })}
  //מחיקת משתמש
  // delete() {
  //   debugger
  //   this.clientService.GetRemoveClient(this.clientService.clientConected.IdClient!).subscribe(data => {
  //     alert("המשתמש הוסר בהצלחה")
  //   }, err => { alert("error" + err) })

  // }
  // MyOrder() {
  //   debugger
  //   this.showOrHide = false;
  //   this.orderService.GetAllIdOrder(this.clientService.clientConected.IdClient!).subscribe(data => {
  //     debugger
  //     this.orderService.listOrder = data
  //   })
  // }

  OrderTrack(id: number) {
    debugger
    this.orderService.GetOrderTrack(id).subscribe(data=>{
      this.orderTrack=data
    })
    this.orderTrack=0;

  }
}

    // let orderDate = this.orderService.listOrder.find(x => x.OrderID == id)
    // let x = orderDate?.OrderDate?.toString();


    // let y=d?.slice(0,10)
    // this.date.setHours(0);
    // this.date.setMinutes(0);
    // this.date.setSeconds(0);
    // let j= this.date;
    // let dd=Date.parse(y!) - Date.parse(j.toString())
    // if (dd < 0)
    // {
    //   this.a = 3;
    // }  
    // else{
    //     if (this.destinationsRouteService.listDestinationsRoute.find(x => x.OrderID == id)) {
    //       this.a = 2;
    //     }
    //     else
    //     {
    //         this.a=1;
    //     }
    // }
