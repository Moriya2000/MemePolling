import { Component, OnInit } from '@angular/core';
import { AllDetailsCompanyComponent } from '../all-details-company/all-details-company.component';
import { AllDetailsCompany } from '../classes/AllDetailsCompany';
import { SendingCompanyService } from '../services/sending-company.service';

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TaskLogComponent implements OnInit {

  constructor(public sendingCompanyService:SendingCompanyService,) { }

  ngOnInit(): void {
    debugger
    //שליפת פרטי חברת שליחויות
    this.sendingCompanyService.GetIdAllDetailsCompany().subscribe(data=>{
      debugger
      this.sendingCompanyService.newCompany=data
    })
     
debugger
// listAllCompany
  }
  // (click)="updatSendingCompany()"
  updatSendingCompany()
  {
    debugger
    this.sendingCompanyService.newCompany= this.sendingCompanyService.companyConected;
  }

  delete()
  {
    debugger
    this.sendingCompanyService.GetRemoveSendingCompany().subscribe(data=>
      this.sendingCompanyService.listCompany=data)
      alert("החברה הוסרה בהצלחה")
  }
}
