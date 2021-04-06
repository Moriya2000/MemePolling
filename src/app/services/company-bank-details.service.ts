import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyBankDetails } from '../classes/CompanyBankDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyBankDetailsService {

  listCompanyBankDetails:Array<CompanyBankDetails>=new Array<CompanyBankDetails>();
  newCompanyBankDetails:CompanyBankDetails=new CompanyBankDetails();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/CompanyBankDetails"

  //שליפת רשימת פרטי בנק
  GatAllCompanyBankDetails():Observable<Array<CompanyBankDetails>>{
    return this.http.get<Array<CompanyBankDetails>>(this.url+"/GatAllCompanyBankDetails")}
      
  //שליפת פרטי בנק לפי קוד   
    GetIdCompanyBankDetails(id:number):Observable<Array<CompanyBankDetails>>{
    return this.http.get<Array<CompanyBankDetails>>(this.url+"/GetIdCompanyBankDetails"+id)}
        
  //הוספת פרטי בנק  
  GetAddCompanyBankDetails(c:CompanyBankDetails):Observable<Array<CompanyBankDetails>>{
    return this.http.put<Array<CompanyBankDetails>>(this.url+"/GetAddCompanyBankDetails",c)}
    
  //עדכון פרטי בנק  
  GetUpdatCompanyBankDetails(c:CompanyBankDetails):Observable<Array<CompanyBankDetails>>{
    return this.http.post<Array<CompanyBankDetails>>(this.url+"/GetUpdatCompanyBankDetails",c)}
    
  //מחיקת פרטי בנק  
  GetRemoveCompanyBankDetails(id:number):Observable<Array<CompanyBankDetails>>{
    return this.http.delete<Array<CompanyBankDetails>>(this.url+"/GetRemoveCompanyBankDetails"+id)}
}
