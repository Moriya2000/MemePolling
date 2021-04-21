import { Time } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AllDetailsCompany } from '../classes/AllDetailsCompany';
import { BusinessDays } from '../classes/BusinessDays';
import { CarsCompany } from '../classes/CarsCompany';
import { CitiesCompany } from '../classes/CitiesCompany';
import { BusinessDaysService } from '../services/business-days.service';
import { CarsTypesService } from '../services/cars-types.service';
import { CityService } from '../services/city.service';
import { ClientService } from '../services/client.service';
import { SendingCompanyService } from '../services/sending-company.service';
import { StreetService } from '../services/street.service';

@Component({
  selector: 'app-all-details-company',
  templateUrl: './all-details-company.component.html',
  styleUrls: ['./all-details-company.component.css']
})
export class AllDetailsCompanyComponent implements OnInit, AfterViewInit {

  constructor(public cityService: CityService, public streetService: StreetService,
    public sendingCompanyService: SendingCompanyService, public businessDaysService: BusinessDaysService,
    public carsTypesService: CarsTypesService, public clientService: ClientService, public rout: Router) { }

  aaa: boolean = false

  ngAfterViewInit(): void {
    this.initialize()
  }

  di: number = -1;
  ci: number = -1;

  ngOnInit(): void {

    //קריאה לפונקציה ימים 
    this.fillDayInWeek()

    //שליפת ערים
    this.cityService.GatAllCity().subscribe(data => this.cityService.listCity = data);

    //שליפת רחובות
    this.streetService.GatAllStreet().subscribe(data => this.streetService.listStreet = data);

    //שליפת רכבים
    this.carsTypesService.GatAllCarsTypes().subscribe(data => this.carsTypesService.listCarsTypes = data);
    this.initialize()
    //בדיקה האם זה הוספת חברה חדשה
    if (this.sendingCompanyService.newCompany.CompanyNumber == undefined) {
      this.sendingCompanyService.newCompany = new AllDetailsCompany();
      this.sendingCompanyService.newCompany.listCarsCompany = new Array();
      this.sendingCompanyService.companyConected = new AllDetailsCompany();

    }
    //אם זה עדכון
    else {
// this.listCityName=new Array();
this.sendingCompanyService.newCompany.listCitiesCompany?.forEach(c=> this.listCityName.push(c.nameCity!))

      //עובר לי על רשימת ימים
      for (let d = 0; d < this.sendingCompanyService.newCompany.listBusinessDays?.length; d++) {
        debugger
        //מחפש את היום שלחוץ
        this.di = this.listDay.findIndex(d1 => d1.numDay == this.sendingCompanyService.newCompany.listBusinessDays[d].Day);
        if (this.di > -1) {
          //מסמן את התיבה ב-וי 
          let d_checked = this.listDay[this.di]
          d_checked.showOrHide = true;
          //שליפת יום עסקים          
          let busDay = this.sendingCompanyService.companyConected.listBusinessDays.filter(x => x.Day == d_checked.numDay)[0]
          busDay.nameDay = this.listDay[this.di].nameDay

          this.listBusDay.push({ ...busDay })
        }
      }
      debugger
      this.carsTypesService.GatAllCarsTypes().subscribe(data => {
        this.carsTypesService.listCarsTypes = data

        // //עובר על הרשימה של הרכבים
        for (let c = 0; c < this.sendingCompanyService.newCompany.listCarsCompany?.length; c++) {
          let car = this.carsTypesService.listCarsTypes.findIndex(c1 => c1.CarTypeID == this.sendingCompanyService.newCompany.listCarsCompany[c].CarTypeID)
          this.carsTypesService.listCarsTypes[car].showOrHide = true
        }

      });
    }
  }

//   deleteCity()
// {
//   for(let c=0;c<this.sendingCompanyService.newCompany.listCitiesCompany!.length;c++)
//   {
//     let index =this.sendingCompanyService.newCompany.listCitiesCompany?.forEach(c1=> c1.nameCity==   this.listCityName[c].)
//   }
 

// }
  //רשימה לשליפת ימי עסקים 
  listBusDay: BusinessDays[] = new Array();
  listDay: DayInWeek[] = new Array();

  //פונקציה שמכניסה לרשימה של הימים את השם של היום ואם הוא בחור או לא
  fillDayInWeek() {
    this.listDay.push(new DayInWeek(1, "ראשון", false))
    this.listDay.push(new DayInWeek(2, "שני", false))
    this.listDay.push(new DayInWeek(3, "שלישי", false))
    this.listDay.push(new DayInWeek(4, "רביעי", false))
    this.listDay.push(new DayInWeek(5, "חמישי", false))
    this.listDay.push(new DayInWeek(6, "שישי", false))
    this.listDay.push(new DayInWeek(7, "מוצאי שבת", false))
  }

  //בדיקה האם כבר בחר יום המסויים 
  changeDay(numDay: number) {
    debugger
    //אם לא מצא יום בחור לא מסמן וי
    let d = this.listDay.filter(x => x.numDay == numDay)[0]
    d.showOrHide = !d.showOrHide
    //אם עדיין לא בחר מכניס לרשימה
    if (this.listBusDay.find(d => d.Day == numDay) == null) {
      this.listBusDay.push(new BusinessDays(0, 0, numDay, "", "", this.listDay.find(n => n.numDay == numDay)?.nameDay))
    }
    //אם בחר אז מסיר מהרשימה
    else
      this.listBusDay.splice(this.listBusDay.findIndex(d => d.Day == numDay), 1)
  }

  //הוספת ערים לחברה
  listCities: CitiesCompany[] = new Array();

  clickCity(numCity: number) {
    //אם עדיין לא בחר עיר זו מכניס לרשימה
    if (this.listCities.find(d => d.CitiesCompanyID == numCity) == null) {
      this.listCities.push(new CitiesCompany(0, 0, numCity))
    }
    //אם כן בחר כבר אז לא מכניס
    else
      this.listCities.splice(this.listCities.findIndex(d => d.CitiesCompanyID == numCity), 1)
  }

  //בחירת ערים
  clickedOption(aa: any) {
    console.log(this.sendingCompanyService.newCompany.listCitiesCompany);
  }

  // //ליסט רכבים לחברה 
  // listCars: CarsCompany[] = new Array();

  //הוספת רכבים
  clickedCar(car: CarsCompany) {
    if (this.sendingCompanyService.newCompany.listCarsCompany?.find(c => c == car) != null)
      this.sendingCompanyService.newCompany.listCarsCompany.splice(this.sendingCompanyService.newCompany.listCarsCompany.findIndex(c => c == car), 1)
    else
      this.sendingCompanyService.newCompany.listCarsCompany?.push(car);

    console.log(this.sendingCompanyService.newCompany.listCarsCompany);

  }
  changeAddress(address: Address) {
    this.sendingCompanyService.newCompany.FullAddress = address.formatted_address
  }
  //הוספת חברה חדשה
  addDetailsCompany() {
    debugger
    //בדיקה האם זה הוספה
    if (this.sendingCompanyService.newCompany.SendingCompanyID == undefined) {
      this.sendingCompanyService.newCompany.listBusinessDays = this.listBusDay;
      this.sendingCompanyService.newCompany.listCitiesCompany = new Array();
      this.listCityName.forEach(c => this.sendingCompanyService.newCompany.listCitiesCompany?.push(new CitiesCompany(0, this.sendingCompanyService.newCompany.SendingCompanyID, 0, c)))
      this.sendingCompanyService.GetAddAllDetailsCompany(this.sendingCompanyService.newCompany).subscribe(data => {
        debugger
        this.clientService.typeUserCompany = true;
        debugger
        this.sendingCompanyService.companyConected = this.sendingCompanyService.newCompany;
        // this.sendingCompanyService.companyConected = this.sendingCompanyService.Company;
        this.sendingCompanyService.conected = true;
        alert("הפרטים הוכנסו בהצלחה")
        this.rout.navigate(['/TaskLog']);

      }, err => { alert("error" + err) })
    }
    //בדיקה האם זה עדכון
    else {
      this.sendingCompanyService.GetUpdatSendingCompany(this.sendingCompanyService.newCompany).subscribe(data =>
        this.sendingCompanyService.listCompany = data)
      alert(" עודכנה בהצלחה")
      this.rout.navigate(['/TaskLog']);
    }
    // this.sendingCompanyService.newCompany = new AllDetailsCompany();
  }
  hideCheckCity: boolean = true;
  listCityName: string[] = new Array();//רשימת ערים שהחברה בחרה
  cityNameChecked: string = ""
  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;
  @ViewChild("searchTextField") searchTextField: any;
  initialize() {
    debugger
    let input = document.getElementById('searchTextField') as HTMLInputElement;
    var options = {
      types: ['(cities)'],
      componentRestrictions: { country: "il" }
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
  }
  checkedCity(address: any) {
    this.cityNameChecked = address.target.value
  }
  plusCity1()//כל פעם שהחברה בוחרת עיר מתווסף לרשימה של הערים שבחרה
  {
    debugger
    if (this.listCityName.find(c => c == this.cityNameChecked) == null)
      this.listCityName.push(this.cityNameChecked)
    // this.hideCheckCity=!this.hideCheckCity
    let input = document.getElementById('searchTextField') as HTMLInputElement;
    input.value = ""//איפוס תיבת הבחירה
  }
}

//מחלקה ששומרת לי יום במספר, שם היום, ואם הוא בחור או לא
export class DayInWeek {
  constructor(public numDay: number, public nameDay: string, public showOrHide: boolean) { }
}
