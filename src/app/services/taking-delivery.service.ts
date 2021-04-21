import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllOrder } from '../classes/AllOrder';
import { Client } from '../classes/Client';
import { GivingDelivery } from '../classes/GivingDelivery';
import { TakingDelivery } from '../classes/TakingDelivery';
import { ClientLoginComponent } from '../client-login/client-login.component';

@Injectable({
  providedIn: 'root'
})
export class TakingDeliveryService {

  listTakingDelivery:Array<TakingDelivery>=new Array<TakingDelivery>();
  
  newTakingDelivery:AllOrder=new AllOrder();
    
  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/TakingDelivery"
  
//שליפת רשימת לקיחת משלוח
GatAllTakingDelivery():Observable<Array<TakingDelivery>>{
  return this.http.get<Array<TakingDelivery>>(this.url+"/GatAllTakingDelivery")}
          
//שליפת לקיחת משלוח לפי קוד   
GetAllOrder():Observable<TakingDelivery>{
  return this.http.get<TakingDelivery>(this.url+"/GetAllOrder/"+this.newTakingDelivery.OrderID)}

GetAddAllOrder(c:AllOrder):Observable<AllOrder>{
  this.newTakingDelivery.OrderDate=new Date();
  this.newTakingDelivery.FinalPay=1;
  this.newTakingDelivery.Note="tgfhdfhdf";
  return this.http.put<AllOrder>(this.url+"/GetAddAllOrder",c);
}
//שליפה של כל ההזמנה
GetAllOrder1():Observable<Array<AllOrder>>{
 
  return this.http.get<Array<AllOrder>>(this.url+"/GetAllOrder");
} 
GetUpdatAllOrder(c:AllOrder):Observable<Array<AllOrder>>{
  debugger
  return this.http.post<Array<AllOrder>>(this.url+"/GetUpdatAllOrder",c);
}
//הוספת לקיחת משלוח 
GetAddTakingDelivery(c:TakingDelivery):Observable<Array<TakingDelivery>>{
  return this.http.put<Array<TakingDelivery>>(this.url+"/GetAddTakingDeliver",c)}
        
//עדכון לקיחת משלוח  
GetUpdatTakingDelivery(c:TakingDelivery):Observable<Array<TakingDelivery>>{
  return this.http.post<Array<TakingDelivery>>(this.url+"/GetUpdatTakingDelivery",c)}
        
  //מחיקת לקיחת משלוח  
GetRemoveTakingDelivery(id:number):Observable<Array<TakingDelivery>>{
  return this.http.delete<Array<TakingDelivery>>(this.url+"/GetRemoveTakingDelivery"+id)}
}
