import { Component, OnInit } from '@angular/core';
import { TakingDeliveryService } from '../services/taking-delivery.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(public takingDeliveryService:TakingDeliveryService) { }

  ngOnInit(): void {
    debugger
    this.takingDeliveryService.GetAllOrder().subscribe(data=>
      this.takingDeliveryService.newTakingDelivery=data)
  }

}
