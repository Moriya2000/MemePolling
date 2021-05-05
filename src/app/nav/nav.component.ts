import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDetailsCompany } from '../classes/AllDetailsCompany';
import { AllOrder } from '../classes/AllOrder';
import { Client } from '../classes/Client';
import { ClientService } from '../services/client.service';
import { SendingCompanyService } from '../services/sending-company.service';
import { TakingDeliveryService } from '../services/taking-delivery.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public clientService: ClientService, public sendingCompanyService: SendingCompanyService,public takingDeliveryService:TakingDeliveryService, private route: Router) { }
  aaa: boolean = false
  a: boolean = false
  password2:string=""
  l:boolean=false
  ngOnInit() {
    debugger
    this.route.navigate(['/Home'])
    // this.clientService.newClient = new Client();
    this.takingDeliveryService.newTakingDelivery=new AllOrder();
  }

  //הוספת לקוח
  addClient() {
    debugger
    this.clientService.GetAddClient().subscribe(data => {
      this.clientService.clientConected = this.clientService.newClient;
      this.clientService.typeUserClient = true;
      this.clientService.conected = true
      this.route.navigate(['/Delivery']);
    }, err => { alert("error" + err) })
    // this.clientService.newClient = new Client();
  }

  //לקוח שכבר רשום למערכת עושה כניסה
  EnterClient() {
    this.clientService.GetEmailAddressPassword(this.clientService.newClient.EmailAddress!, this.clientService.newClient.Password!)
      .subscribe(data => {
        if (data == 1) {
          alert(" ברוך הבאה" + " " + this.clientService.newClient.EmailAddress);
          this.clientService.typeUserClient = true;
          this.clientService.conected = true
          this.clientService.clientConected = this.clientService.newClient;
          this.route.navigate(['/Delivery']);
        }
        else {
          this.clientService.typeUserClient = false;
          this.l=true;
          // alert("משתמש לא קיים במערכת");
          //להעביר אותו לדף ההרשמה!!!!!!!!!!!!!!!!!!
          // document.getElementById("myModalRegister")!.click();
          // this.route.navigate(['/Home']);
          // this.clientService.newClient = new Client();
        }
      }, err => { alert("שגיאה בהתחברות לשרת") })
  }


  //כניסה לחברה שכבר רשומה למערכת
  EnterCompany() {
    debugger
    this.sendingCompanyService.GetCompanyNumberPassword(this.sendingCompanyService.newCompany.CompanyNumber!, this.sendingCompanyService.newCompany.Password!)
      .subscribe(data => {
        if(data!=0){
        // if (data == 1) {
          this.clientService.typeUserCompany = true;
          this.sendingCompanyService.conected = true;
          this.sendingCompanyService.companyConected = this.sendingCompanyService.newCompany;
          // this.sendingCompanyService.GetIdAllDetailsCompany().subscribe(data=>{})
          // this.sendingCompanyService.GatAllSendingCompanyByNumberPassword(this.sendingCompanyService.newCompany.CompanyNumber!, this.sendingCompanyService.newCompany.Password!).subscribe
          this.sendingCompanyService.GatAllSendingCompanyByNumberPassword(data).subscribe
          (data=>
            {
              debugger
              this.sendingCompanyService.currentCompany=data;  
                   alert(" ברוך הבאה" + " " + this.sendingCompanyService.newCompany.CompanyNumber);
          this.route.navigate(['/TaskLog']);
            })
   
        }
        else {
          this.clientService.typeUserCompany = false;
          alert("משתמש לא קיים במערכת");
          this.route.navigate(['/AllDetailsCompany']);
          this.sendingCompanyService.newCompany = new AllDetailsCompany();
        }
      }, err => { alert("שגיאה בהתחברות לשרת") })
  }
}
