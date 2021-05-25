import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AllOrder } from '../classes/AllOrder';
import { DeliveryType } from '../classes/DeliveryType';
import { DeliveryUrgency } from '../classes/DeliveryUrgency';
import { TakingDelivery } from '../classes/TakingDelivery';
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
  aaaaaaaa = true;
  ngOnInit(): void {

    this.fillDayDeliveyUrgency()

    //בדיקה האם המשתמש מחובר
    if (this.clientService.newClient.EmailAddress == undefined) {
      alert("עלייך להתחבר לאתר")
      this.rout.navigate(['/Home'])
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

    debugger
    //שליפת סוג משלוח


    //שליפת דחיפות משלוח
    this.deliveryUrgencyService.GatAllDeliveryUrgency().subscribe(data => this.deliveryUrgencyService.listDeliveryUrgency = data);

    //בדיקה האם זה הוספה
    if (this.takingDeliveryService.newTakingDelivery.TakingDeliveryID == undefined) {
      this.takingDeliveryService.newTakingDelivery = new AllOrder();
      //לשים במשתנה של הבחירה מהליסט TYPE FALSE
      this.deliveryTypeService.GatAllDeliveryType().subscribe(data => {
        this.deliveryTypeService.listDeliveryType = data
        this.deliveryTypeService.listDeliveryType.forEach(t => t.checked = false)

        this.deliveryUrgencyService.GatAllDeliveryUrgency().subscribe(data => 
          this.deliveryUrgencyService.listDeliveryUrgency = data
        //  let d= this.deliveryUrgencyService.listDeliveryUrgency.filter(t => t.DeliveryUrgencyID == this.listDayDeliveryUrgency.)

        );
      });
    }
    else {
      debugger
      let index = this.deliveryTypeService.listDeliveryType.findIndex(t => t.DeliveryTypeID == this.takingDeliveryService.newTakingDelivery.DeliveryTypeID);
      this.deliveryTypeService.listDeliveryType[index].checked = true;

      let index1 = this.listDayDeliveryUrgency.findIndex(t => t.numDayDeliveryUrgency == this.takingDeliveryService.newTakingDelivery.DeliveryUrgencyID);
      this.listDayDeliveryUrgency[index1].showOrHide = true;

    }
    debugger
  }

  listDeliveryUrgency: DeliveryUrgency[] = new Array();
  listDayDeliveryUrgency: DayInDeliveyUrgency[] = new Array();

  fillDayDeliveyUrgency() {
    this.listDayDeliveryUrgency.push(new DayInDeliveyUrgency(1, "מהיום למחר", false))
    this.listDayDeliveryUrgency.push(new DayInDeliveyUrgency(3, "עד 3 ימים", false))
    this.listDayDeliveryUrgency.push(new DayInDeliveyUrgency(7, "עד שבוע ימים", false))
  }

  //בדיקה האם בחר יום המסויים 
  DeliveyUrgency(numDayDeliveyUrgency: number) {
    debugger
    //אם לא מצא יום בחור לא מסמן
    let d = this.listDayDeliveryUrgency.filter(x => x.numDayDeliveryUrgency == numDayDeliveyUrgency)[0]
    d.showOrHide = !d.showOrHide
    //אם עדיין לא בחר מכניס לרשימה
    if (this.listDeliveryUrgency.find(d => d.DeliveryUrgencyID == numDayDeliveyUrgency) == null) {
      this.listDeliveryUrgency.push(new DeliveryUrgency(0, numDayDeliveyUrgency, this.listDayDeliveryUrgency.find(n => n.numDayDeliveryUrgency == numDayDeliveyUrgency)?.nameDayDeliveryUrgency))
    }
    //אם בחר אז מסיר מהרשימה
    else
      this.listDeliveryUrgency.splice(this.listDeliveryUrgency.findIndex(d => d.Urgency == numDayDeliveyUrgency), 1)
  }
  listDeliveryType: Array<DeliveryType> = new Array<DeliveryType>();
  //לקיחת משלוח
  //פונקציה הבודקת באיזה ערים החברה עובדת
  takeDeliveryAddress(address: Address) {
    debugger
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
    debugger
    let city = this.cityService.listCity.find(c => address.formatted_address.includes(c.CityName ? c.CityName : ""))
    //אם החברה עובדת בעיר שבחר 
    if (city != null) {
      this.takingDeliveryService.newTakingDelivery.GDCityID = city.CityID
      this.takingDeliveryService.newTakingDelivery.GDlatAddress = address.geometry.location.lat();
      this.takingDeliveryService.newTakingDelivery.GDlngAddress = address.geometry.location.lng();
      this.takingDeliveryService.newTakingDelivery.GDNameAddress = address.formatted_address;
    }
    //אם החברה לא עובדת בעיר שבחר
    else
    alert("אין משלוחים לעיר זו. בחר כתובת אחרת")
  }





  checkDeliveryType(typeId: any) {
    debugger
    this.takingDeliveryService.newTakingDelivery.DeliveryTypeID = typeId;
    let index = this.deliveryTypeService.listDeliveryType.findIndex(t => t.DeliveryTypeID == this.takingDeliveryService.newTakingDelivery.DeliveryTypeID);
    this.deliveryTypeService.listDeliveryType[index].checked = true;
  }
  checkedDeliveryUrgency(id: number) {
    this.takingDeliveryService.newTakingDelivery.DeliveryUrgencyID = id;
  }
  //פונקציה שמוסיפה משלוח חדש
  addDetailesDelivey() {

    debugger
    if (this.takingDeliveryService.newTakingDelivery.TakingDeliveryID == undefined) {

      //של הלקוח שכרגע מחובר למערכת IDשמירת ה
      let clientID = this.clientService.newClient.IdClient;
      this.takingDeliveryService.newTakingDelivery.ClientID = clientID;
      this.takingDeliveryService.newTakingDelivery.TDStreetID = 1;
      this.takingDeliveryService.newTakingDelivery.GDStreetID = 1;
      //הוספת פרטי לקיחת משלוח
      this.takingDeliveryService.GetAddAllOrder(this.takingDeliveryService.newTakingDelivery).subscribe(data => {
        debugger
        this.takingDeliveryService.newTakingDelivery.OrderID = data.OrderID
        this.takingDeliveryService.newTakingDelivery.GivingDeliveryID = data.GivingDeliveryID
        this.takingDeliveryService.newTakingDelivery.TakingDeliveryID = data.TakingDeliveryID
        this.rout.navigate(['/Pay'])
      })
      // alert("הפרטים הוכנסו בהצלחה");
    }   // this.takingDeliveryService.newTakingDelivery = new TakingDelivery();
    else {
      this.takingDeliveryService.GetUpdatAllOrder(this.takingDeliveryService.newTakingDelivery).subscribe(data =>
        this.takingDeliveryService.listTakingDelivery = data)
      //alert(" עודכן בהצלחה")
      this.rout.navigate(['/Pay'])

    }


  }
}

export class DayInDeliveyUrgency {
  constructor(public numDayDeliveryUrgency: number, public nameDayDeliveryUrgency: string, public showOrHide: boolean) { }
}
