import { Component, OnInit } from '@angular/core';
import { AllOrder } from '../classes/AllOrder';
import { TakingDeliveryService } from '../services/taking-delivery.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public takingDeliveryService:TakingDeliveryService) { }

  ngOnInit(): void {
this.takingDeliveryService.newTakingDelivery=new AllOrder();
  }
//   scroll(el: HTMLElement) {
//     el.scrollIntoView();
// }

scroll(el: HTMLElement) {
  el.scrollIntoView({behavior: 'smooth'});
}


}
