import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { TakingDeliveryService } from '../services/taking-delivery.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(public takingDeliveryService: TakingDeliveryService, public orderService:OrderService) { }
  CardNumber: string = ""
  CardValidity: string = ""
  Last3Digits: string = ""
  finishSum: number = 0
  sum:String=" ";


  ngOnInit(): void {
    // }
    debugger
    this.takingDeliveryService.GetAllOrder().subscribe(data=>this.takingDeliveryService.newTakingDelivery==data)

    // Pay() {
    debugger;
    // let sum = 0;
    let x = 0;//type
    let y = 0;//דחיפות
    // let sum=0;
    //כתובת מקור
    let lat1 = this.takingDeliveryService.newTakingDelivery.TDlatAddress;
    let lng1 = this.takingDeliveryService.newTakingDelivery.TDlngaddress;

    //כתובת יעד
    let lat2 = this.takingDeliveryService.newTakingDelivery.GDlatAddress;
    let lng2 = this.takingDeliveryService.newTakingDelivery.GDlngAddress;

    let distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(lat1!, lng1!), new google.maps.LatLng(lat2!, lng2!));

    //בדיקה מהיא דחיפות המשלוח-מהיום למחר
    if (this.takingDeliveryService.newTakingDelivery.DeliveryUrgencyID == 1) {
      //בדיקה האם המשלוח זה מעטפה
      if (this.takingDeliveryService.newTakingDelivery.DeliveryTypeID == 1) {
        x = 2;
        y = 80;

      }
      //אם זה ארגז
      else {
        //בודק נפח=אופנוע
        if (this.takingDeliveryService.newTakingDelivery.Volume! < 50) {
          x = 2;
          y = 80;
        }
        else {
          //בודק נפח=רכב פרטי
          if (this.takingDeliveryService.newTakingDelivery.Volume! < 300) {
            x = 5;
            y = 100;
          }
          else {
            //בודק נפח=רכב מסחרי
            if (this.takingDeliveryService.newTakingDelivery.Volume! < 600) {
              x = 10;
              y = 150;
            }
            else {
              //בודק נפח-משאית 
              x = 15;
              y = 200;
            }
          }
        }
      }
    }
    else {
      //בדיקה האם הדחיפות לעוד 3 ימים
      if (this.takingDeliveryService.newTakingDelivery.DeliveryUrgencyID == 2) {
        //בדיקה האם המשלוח זה מעטפה
        if (this.takingDeliveryService.newTakingDelivery.DeliveryTypeID == 1) {
          x = 2;
          y = 50;
        }
        //אם זה ארגז
        else {
          //בודק נפח=אופנוע
          if (this.takingDeliveryService.newTakingDelivery.Volume! < 50) {
            x = 2;
            y = 50;
          }
          else {
            //בודק נפח=רכב פרטי
            if (this.takingDeliveryService.newTakingDelivery.Volume! < 300) {
              x = 5;
              y = 70;
            }
            else {
              //בודק נפח=רכב מסחרי
              if (this.takingDeliveryService.newTakingDelivery.Volume! < 600) {
                x = 10;
                y = 100;
              }
              else {
                //בודק נפח-משאית 
                x = 15;
                y = 150;
              }
            }
          }
        }
      }

      else {
        //בדיקה האם הדחיפות לעוד 7 ימים
        // if (this.takingDeliveryService.newTakingDelivery.DeliveryUrgencyID == 3) {
        //בדיקה האם המשלוח זה מעטפה
        if (this.takingDeliveryService.newTakingDelivery.DeliveryTypeID == 1) {
          x = 2;
          y = 30;
        }
        //אם זה ארגז
        else {
          //בודק נפח=אופנוע
          if (this.takingDeliveryService.newTakingDelivery.Volume! < 50) {
            x = 2;
            y = 30;
          }
          else {
            //בודק נפח=רכב פרטי
            if (this.takingDeliveryService.newTakingDelivery.Volume! < 300) {
              x = 5;
              y = 40;
            }

            else {
              //בודק נפח=רכב מסחרי
              if (this.takingDeliveryService.newTakingDelivery.Volume! < 600) {
                x = 10;
                y = 80;
              }
              else {
                //בודק נפח-משאית 
                x = 15;
                y = 120;
              }
            }
          }
        }
      }
    }
    this.finishSum = ((distance/1000)*x )+ y;
    
   this.takingDeliveryService.newTakingDelivery.FinalPay=this.finishSum;
  }

  update()
  {
    this.takingDeliveryService.newTakingDelivery.FinalPay=this.finishSum;
    this.takingDeliveryService.GetUpdatAllOrder(this.takingDeliveryService.newTakingDelivery).subscribe(
      myData=>
      {
        this.takingDeliveryService.listTakingDelivery=myData
      }
    )
  }
}