import { Component, OnInit } from '@angular/core';
import { TakingDeliveryService } from '../services/taking-delivery.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public takingDeliveryService:TakingDeliveryService) { }

  ngOnInit(): void {
  }

}
