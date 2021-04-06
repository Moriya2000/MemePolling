import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryRoutes } from '../classes/DeliveryRoutes';

@Injectable({
  providedIn: 'root'
})
export class DeliveryRoutesService {

  listDeliveryRoutes:Array<DeliveryRoutes>=new Array<DeliveryRoutes>();
  newDeliveryRoutes:DeliveryRoutes=new DeliveryRoutes();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/DeliveryRoutes"

  //שליפת רשימת מסלול משלוחים
  GatAllDeliveryRoutes():Observable<Array<DeliveryRoutes>>{
    return this.http.get<Array<DeliveryRoutes>>(this.url+"/GatAllDeliveryRoutes")}
        
  //שליפת מסלול משלוח לפי קוד   
  GetIdDeliveryRoutes(id:number):Observable<Array<DeliveryRoutes>>{
    return this.http.get<Array<DeliveryRoutes>>(this.url+"/GetIdDeliveryRoutes"+id)}
          
  //הוספת מסלול משלוח  
  GetAddDeliveryRoutes(c:DeliveryRoutes):Observable<Array<DeliveryRoutes>>{
    return this.http.put<Array<DeliveryRoutes>>(this.url+"/GetAddDeliveryRoutes",c)}
      
  //עדכון מסלול משלוח 
  GetUpdatDeliveryRoutes(c:DeliveryRoutes):Observable<Array<DeliveryRoutes>>{
    return this.http.post<Array<DeliveryRoutes>>(this.url+"/GetUpdatDeliveryRoutes",c)}
      
  //מחיקת מסלול משלוח  
  GetRemoveDeliveryRoutes(id:number):Observable<Array<DeliveryRoutes>>{
    return this.http.delete<Array<DeliveryRoutes>>(this.url+"/GetRemoveDeliveryRoutes"+id)}
}
