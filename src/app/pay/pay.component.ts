import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() { }
  CardNumber: string = ""
  CardValidity: string = ""
  Last3Digits: string = ""


  ngOnInit(): void {
  }

  //פונקציה שקוראת אחרי הכנסת הפרטים של המשלוח
  Pay(){
//חישוב התשלום של ההזמנה
//המרחק בין הכתבות בקילומטרים + הרכב שצריך להוציא אלמשלוח
  }
}
