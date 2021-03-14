import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryUrgency } from '../classes/DeliveryUrgency';

@Injectable({
  providedIn: 'root'
})
export class DeliveryUrgencyService {

  listDeliveryUrgency:Array<DeliveryUrgency>=new Array<DeliveryUrgency>();
  newDeliveryUrgency:DeliveryUrgency=new DeliveryUrgency();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Client"

  //שליפת רשימת דחיפות משלוח
  GatAllDeliveryUrgency():Observable<Array<DeliveryUrgency>>{
    return this.http.get<Array<DeliveryUrgency>>(this.url+"/GatAllDeliveryUrgency")}
            
  //שליפת דחיפות משלוח לפי קוד   
  GetIdDeliveryUrgency(id:number):Observable<Array<DeliveryUrgency>>{
    return this.http.get<Array<DeliveryUrgency>>(this.url+"/GetIdDeliveryUrgency"+id)}
              
  //הוספת דחיפות משלוח 
  GetAddDeliveryUrgency(c:DeliveryUrgency):Observable<Array<DeliveryUrgency>>{
    return this.http.put<Array<DeliveryUrgency>>(this.url+"/GetAddDeliveryUrgency",c)}
          
  //עדכון דחיפות משלוח  
  GetUpdatDeliveryUrgency(c:DeliveryUrgency):Observable<Array<DeliveryUrgency>>{
    return this.http.post<Array<DeliveryUrgency>>(this.url+"/GetUpdatDeliveryUrgency",c)}
          
  //מחיקת דחיפות משלוח  
  GetRemoveDeliveryUrgency(id:number):Observable<Array<DeliveryUrgency>>{
    return this.http.delete<Array<DeliveryUrgency>>(this.url+"/GetRemoveDeliveryUrgency"+id)}
}
