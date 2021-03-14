import { Component, OnInit } from '@angular/core';
import { BusinessDays } from '../classes/BusinessDays';

@Component({
  selector: 'app-business-day',
  templateUrl: './business-day.component.html',
  styleUrls: ['./business-day.component.css']
})
export class BusinessDayComponent implements OnInit {

  constructor(public businessDayService:BusinessDays) { }

  ngOnInit(): void {
  }

}
