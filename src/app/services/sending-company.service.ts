import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendingCompany } from '../classes/SendingCompany';

@Injectable({
  providedIn: 'root'
})
export class SendingCompanyService {

  listCompany: Array<SendingCompany> = new Array<SendingCompany>()
  newCompany: SendingCompany = new SendingCompany();
  
  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Client"

  //שליפת רשימת חברות שליחויות
  GatAllSendingCompany():Observable<Array<SendingCompany>>{
    return this.http.get<Array<SendingCompany>>(this.url+"/GatAllSendingCompany")}
            
  //שליפת חברת שליחויות לפי קוד   
  GetIdSendingCompany(id:number):Observable<Array<SendingCompany>>{
    return this.http.get<Array<SendingCompany>>(this.url+"/GetIdSendingCompany"+id)}
              
  //הוספת חברת שליחויות 
  GetAddSendingCompany(c:SendingCompany):Observable<Array<SendingCompany>>{
    return this.http.put<Array<SendingCompany>>(this.url+"/GetAddSendingCompany",c)}
          
  //עדכון חברת שליחויות  
  GetUpdatSendingCompany(c:SendingCompany):Observable<Array<SendingCompany>>{
    return this.http.post<Array<SendingCompany>>(this.url+"/GetUpdatSendingCompany",c)}
          
  //מחיקת חברת שליחויות  
  GetRemoveSendingCompany(id:number):Observable<Array<SendingCompany>>{
    return this.http.delete<Array<SendingCompany>>(this.url+"/GetRemoveSendingCompany"+id)}
}
