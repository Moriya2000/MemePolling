import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDetailsCompany } from '../classes/AllDetailsCompany';
import { SendingCompanyService } from '../services/sending-company.service';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {

  constructor(public sendingCompanyService:SendingCompanyService,public rout:Router) { }

  ngOnInit(): void {
  }

  Enter()
  {
    debugger
    this.sendingCompanyService.GetCompanyNumberPassword(this.sendingCompanyService.newCompany.CompanyNumber!,this.sendingCompanyService.newCompany.Password!)
    .subscribe(data=>{
      if(data==1)
      {   
        debugger     
        this.sendingCompanyService.conected=true
        this.sendingCompanyService.companyConected=this.sendingCompanyService.newCompany;
        alert(" ברוך הבאה"+ " "+this.sendingCompanyService.newCompany.CompanyNumber);
        this.rout.navigate(['/TaskLog']);
      }
      else{
        alert("משתמש לא קיים במערכת");
        this.rout.navigate(['/AllDetailsCompany']);
        this.sendingCompanyService.newCompany=new AllDetailsCompany;
      }
    },err=>{alert("שגיאה בהתחברות לשרת")})

}}
