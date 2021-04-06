import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(public orderService:OrderService) { }

  ngOnInit(): void {
  }
}
