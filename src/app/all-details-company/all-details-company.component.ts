import { Time } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDetailsCompany } from '../classes/AllDetailsCompany';
import { BusinessDays } from '../classes/BusinessDays';
import { CarsCompany } from '../classes/CarsCompany';
import { CitiesCompany } from '../classes/CitiesCompany';
import { SendingCompany } from '../classes/SendingCompany';
import { BusinessDaysService } from '../services/business-days.service';
import { CarsTypesService } from '../services/cars-types.service';
import { CityService } from '../services/city.service';
import { SendingCompanyService } from '../services/sending-company.service';
import { StreetService } from '../services/street.service';

@Component({
  selector: 'app-all-details-company',
  templateUrl: './all-details-company.component.html',
  styleUrls: ['./all-details-company.component.css']
})
export class AllDetailsCompanyComponent implements OnInit {

  constructor(public cityService: CityService, public streetService: StreetService,
    public sendingCompanyService: SendingCompanyService, public businessDaysService: BusinessDaysService, 
    public carsTypesService: CarsTypesService, public rout:Router) { }

  di: number = -1;
  // ci:number = -1;

  ngOnInit(): void 
  {

    //קריאה לפונקציה ימים 
    this.fillDayInWeek()

    //שליפת ערים
    this.cityService.GatAllCity().subscribe(data => this.cityService.listCity = data);

    //שליפת רחובות
    this.streetService.GatAllStreet().subscribe(data => this.streetService.listStreet = data);

    //שליפת רכבים
    this.carsTypesService.GatAllCarsTypes().subscribe(data => this.carsTypesService.listCarsTypes = data);
    
    //בדיקה האם זה הוספת חברה חדשה
    if(this.sendingCompanyService.newCompany.SendingCompanyID == undefined) 
    {
      this.sendingCompanyService.newCompany = new AllDetailsCompany();
      this.sendingCompanyService.newCompany.listCarsCompany = new Array();
    }
    //אם זה עדכון
    else 
    {
      //עובר לי על רשימת ימים
      for (let d = 0; d < this.sendingCompanyService.newCompany.listBusinessDays?.length; d++) 
      {
        //מחפש את היום שלחוץ
        this.di = this.listDay.findIndex(d1 => d1.numDay == this.sendingCompanyService.newCompany.listBusinessDays[d].Day);
        if (this.di > -1) 
        {
          //מסמן את התיבה ב-וי 
          let d_checked = this.listDay[this.di]
          d_checked.showOrHide = true;
          //שליפת יום עסקים          
          let busDay = this.sendingCompanyService.companyConected.listBusinessDays.filter(x=>x.Day == d_checked.numDay)[0]
          this.listBusDay.push(busDay)
        }
      }
      // //עובר על הרשימה של הרכבים
      // for(let c=0; c<this.sendingCompanyService.newCompany.listCarsCompany?.length;c++)
      // {
      //   debugger
      //   this.ci=this.sendingCompanyService.newCompany.listCarsCompany.findIndex(c1=>c1.CarsCompanyID==this.sendingCompanyService.newCompany.listCarsCompany[c].CarsCompanyID);
      //   if(this.ci>-1)
      //   {
      //     let c_checked=this.sendingCompanyService.newCompany.listCarsCompany[this.ci]
      //   }
      // }
    }
  }

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
  changeDay(numDay:number) 
  {
    //אם לא מצא יום בחור לא מסמן וי
    let d = this.listDay.filter(x=>x.numDay == numDay)[0]
    d.showOrHide = ! d.showOrHide
    //אם עדיין לא בחר מכניס לרשימה
    if (this.listBusDay.find(d => d.Day == numDay) == null) {
      this.listBusDay.push(new BusinessDays(0, 0, numDay, undefined, undefined, this.listDay.find(n => n.numDay == numDay)?.nameDay))
    }
    //אם בחר אז מסיר מהרשימה
    else
      this.listBusDay.splice(this.listBusDay.findIndex(d => d.BusinessDaysID == numDay), 1)
  }
  
  //הוספת ערים לחברה
  listCities: CitiesCompany[] = new Array();
  
  clickCity(numCity:number) 
  {
    //אם עדיין לא בחר עיר זו מכניס לרשימה
    if (this.listCities.find(d => d.CitiesCompanyID == numCity) == null) 
    {
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

  //ליסט רכבים לחברה 
  listCars: CarsCompany[] = new Array();
  
  //הוספת רכבים
  clickedCar(car: CarsCompany) 
  {
    if(this.sendingCompanyService.newCompany.listCarsCompany?.find(c => c == car) != null)
      this.sendingCompanyService.newCompany.listCarsCompany.splice(this.sendingCompanyService.newCompany.listCarsCompany.findIndex(c => c == car), 1)
    else
      this.sendingCompanyService.newCompany.listCarsCompany?.push(car);
  }

  //הוספת חברה חדשה
  addDetailsCompany() 
  {
    //בדיקה האם זה הוספה
    if(this.sendingCompanyService.newCompany.SendingCompanyID == undefined) 
    {
      this.sendingCompanyService.newCompany.listBusinessDays = this.listBusDay;
      this.sendingCompanyService.GetAddAllDetailsCompany(this.sendingCompanyService.newCompany).subscribe(data => {
      alert("הפרטים הוכנסו בהצלחה")
      this.rout.navigate(['/LoginCompany']);

      },err => { alert("error" + err) })
    }
    //בדיקה האם זה עדכון
    else 
    {
      this.sendingCompanyService.GetUpdatSendingCompany(this.sendingCompanyService.newCompany).subscribe(data =>
      this.sendingCompanyService.listCompany = data)
      alert(" עודכנה בהצלחה")
      this.rout.navigate(['/TaskLog']);
    }
    this.sendingCompanyService.newCompany = new AllDetailsCompany();
  }
}

//מחלקה ששומרת לי יום במספר, שם היום, ואם הוא בחור או לא
export class DayInWeek 
{
  constructor(public numDay: number, public nameDay: string, public showOrHide: boolean){}
}
