import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakingDelivery } from '../classes/TakingDelivery';

@Injectable({
  providedIn: 'root'
})
export class TakingDeliveryService {

  listTakingDelivery:Array<TakingDelivery>=new Array<TakingDelivery>();
  newTakingDelivery:TakingDelivery=new TakingDelivery();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Client"
  
//שליפת רשימת לקיחת משלוח
GatAllTakingDelivery():Observable<Array<TakingDelivery>>{
  return this.http.get<Array<TakingDelivery>>(this.url+"/GatAllTakingDelivery")}
          
//שליפת לקיחת משלוח לפי קוד   
GetIdTakingDelivery(id:number):Observable<Array<TakingDelivery>>{
  return this.http.get<Array<TakingDelivery>>(this.url+"/GetIdTakingDelivery"+id)}
            
//הוספת לקיחת משלוח 
GetAddTakingDelivery(c:TakingDelivery):Observable<Array<TakingDelivery>>{
  return this.http.put<Array<TakingDelivery>>(this.url+"/GetAddTakingDelivery",c)}
        
//עדכון לקיחת משלוח  
GetUpdatTakingDelivery(c:TakingDelivery):Observable<Array<TakingDelivery>>{
  return this.http.post<Array<TakingDelivery>>(this.url+"/GetUpdatTakingDelivery",c)}
        
  //מחיקת לקיחת משלוח  
GetRemoveTakingDelivery(id:number):Observable<Array<TakingDelivery>>{
  return this.http.delete<Array<TakingDelivery>>(this.url+"/GetRemoveTakingDelivery"+id)}
}
