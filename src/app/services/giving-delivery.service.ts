import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GivingDelivery } from '../classes/GivingDelivery';

@Injectable({
  providedIn: 'root'
})
export class GivingDeliveryService {

  listGivingDelivery:Array<GivingDelivery>=new Array<GivingDelivery>();
  newGivingDelivery:GivingDelivery=new GivingDelivery();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Client"

  //שליפת רשימת נתינת משלוחים
  GatAllGivingDelivery():Observable<Array<GivingDelivery>>{
    return this.http.get<Array<GivingDelivery>>(this.url+"/GatAllGivingDelivery")}
            
  //שליפת נתינת משלוח לפי קוד   
  GetIdGivingDelivery(id:number):Observable<Array<GivingDelivery>>{
    return this.http.get<Array<GivingDelivery>>(this.url+"/GetIdGivingDelivery"+id)}
              
  //הוספת נתינת משלוח
  GetAddGivingDelivery(c:GivingDelivery):Observable<Array<GivingDelivery>>{
    return this.http.put<Array<GivingDelivery>>(this.url+"/GetAddGivingDelivery",c)}
          
  //עדכון נתינת משלוח  
  GetUpdatGivingDelivery(c:GivingDelivery):Observable<Array<GivingDelivery>>{
    return this.http.post<Array<GivingDelivery>>(this.url+"/GetUpdatGivingDelivery",c)}
          
  //מחיקת נתינת משלוח  
  GetRemoveGivingDelivery(id:number):Observable<Array<GivingDelivery>>{
    return this.http.delete<Array<GivingDelivery>>(this.url+"/GetRemoveGivingDelivery"+id)}
}
