import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
 
  note:string=""
  ngOnInit(): void {
  }
  Note()
  {
    this.note=" "
  }
}
