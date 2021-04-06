import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AllOrder } from '../classes/AllOrder';
import { Order } from '../classes/Order';
import { TakingDelivery } from '../classes/TakingDelivery';
import { ClientLoginComponent } from '../client-login/client-login.component';
import { CityService } from '../services/city.service';
import { ClientService } from '../services/client.service';
import { DeliveryTypeService } from '../services/delivery-type.service';
import { DeliveryUrgencyService } from '../services/delivery-urgency.service';
import { StreetService } from '../services/street.service';
import { TakingDeliveryService } from '../services/taking-delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(public takingDeliveryService: TakingDeliveryService, public cityService: CityService,
    public clientService: ClientService, public deliveryTypeService: DeliveryTypeService, public deliveryUrgencyService: DeliveryUrgencyService,
    public streetService: StreetService, public rout: Router) { }


  ngOnInit(): void {

    //בדיקה האם המשתמש מחובר
    if (this.clientService.newClient.EmailAddress == undefined) {
      alert("עלייך להתחבר לאתר")
      this.rout.navigate(['/ClientLogin'])
    }
    else {
      this.rout.navigate(['/Delivery'])
      //IDפונקציה ששולחת כתובת מייל וסיסמא ושולפת את ה
      this.clientService.GetEmailAddressPasswordID(this.clientService.newClient.EmailAddress!, this.clientService.newClient.Password!).subscribe
        (data => {
          this.clientService.newClient.IdClient = data
        })
    }

    //שליפת ערים
    this.cityService.GatAllCity().subscribe(data => this.cityService.listCity = data);

    //שליפת רחובות
    this.streetService.GatAllStreet().subscribe(data => this.streetService.listStreet = data);

    //שליפת סוג משלוח
    this.deliveryTypeService.GatAllDeliveryType().subscribe(data => this.deliveryTypeService.listDeliveryType = data);

    //שליפת דחיפות משלוח
    this.deliveryUrgencyService.GatAllDeliveryUrgency().subscribe(data => this.deliveryUrgencyService.listDeliveryUrgency = data);

    //בדיקה האם זה הוספה
    if (this.takingDeliveryService.newTakingDelivery.TakingDeliveryID == undefined) {
      this.takingDeliveryService.newTakingDelivery = new TakingDelivery();
    }
  }

  //לקיחת משלוח
  //פונקציה הבודקת באיזה ערים החברה עובדת
  takeDeliveryAddress(address: Address) {
    let city = this.cityService.listCity.find(c => address.formatted_address.includes(c.CityName ? c.CityName : ""))
    //אם החברה עובדת בעיר שבחר 
    if (city != null) {
      this.takingDeliveryService.newTakingDelivery.TDCityID = city.CityID
      this.takingDeliveryService.newTakingDelivery.TDlatAddress = address.geometry.location.lat();
      this.takingDeliveryService.newTakingDelivery.TDlngaddress = address.geometry.location.lng();
      this.takingDeliveryService.newTakingDelivery.TDNameAddress = address.formatted_address;
    }
    //אם החברה לא עובדת בעיר שבחר
    else
      alert("אין משלוחים לעיר זו. בחר כתובת אחרת")
  }

  //נתינת משלוח
  //פונקציה הבודקת באיזה ערים החברה עובדת
  getDeliveryAddress(address: Address) {
    let city = this.cityService.listCity.find(c => address.formatted_address.includes(c.CityName ? c.CityName : ""))
    //אם החברה עובדת בעיר שבחר 
    if (city != null) {
      this.takingDeliveryService.newTakingDelivery.GDCityID = city.CityID
      this.takingDeliveryService.newTakingDelivery.GDlatAddress = address.geometry.location.lat();
      this.takingDeliveryService.newTakingDelivery.GDlngaddress = address.geometry.location.lng();
      this.takingDeliveryService.newTakingDelivery.GDNameAddress = address.formatted_address;
    }
    //אם החברה לא עובדת בעיר שבחר
    else
      alert("אין משלוחים לעיר זו. בחר כתובת אחרת")
  }

  //פונקציה שמוסיפה משלוח חדש
  addDetailesDelivey() {
    debugger
    //של הלקוח שכרגע מחובר למערכת IDשמירת ה
    let clientID = this.clientService.newClient.IdClient;
    this.takingDeliveryService.newTakingDelivery.ClientID = clientID;
    this.takingDeliveryService.newTakingDelivery.TDStreetID = 1;
    this.takingDeliveryService.newTakingDelivery.GDStreetID = 1;
    //הוספת פרטי לקיחת משלוח
    this.takingDeliveryService.GetAddAllOrder(this.takingDeliveryService.newTakingDelivery).subscribe(data => {
      alert("הפרטים הוכנסו בהצלחה")
      this.takingDeliveryService.newTakingDelivery = new TakingDelivery();
    }, err => { alert("error" + err) })
  }
}
