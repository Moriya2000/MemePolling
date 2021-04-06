import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryType } from '../classes/DeliveryType';

@Injectable({
  providedIn: 'root'
})
export class DeliveryTypeService {

  listDeliveryType:Array<DeliveryType>=new Array<DeliveryType>();
  newDeliveryType:DeliveryType=new DeliveryType();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/DeliveryType"

  //שליפת רשימת סוג משלוח
  GatAllDeliveryType():Observable<Array<DeliveryType>>{
    this.newDeliveryType.DeliveryTypeID = 0;
    return this.http.get<Array<DeliveryType>>(this.url+"/GatAllDeliveryType")}
          
  //שליפת סוג משלוח לפי קוד   
  GetIdDeliveryType(id:number):Observable<Array<DeliveryType>>{
    return this.http.get<Array<DeliveryType>>(this.url+"/GetIdDeliveryType"+id)}
            
  //הוספת סוג משלוח 
  GetAddDeliveryType(c:DeliveryType):Observable<Array<DeliveryType>>{
    this.newDeliveryType.DeliveryTypeID = 0;

    return this.http.put<Array<DeliveryType>>(this.url+"/GetAddDeliveryType",c)}
        
  //עדכון סוג משלוח  
  GetUpdatDeliveryType(c:DeliveryType):Observable<Array<DeliveryType>>{
    return this.http.post<Array<DeliveryType>>(this.url+"/GetUpdatDeliveryType",c)}
        
  //מחיקת סוג משלוח  
  GetRemoveDeliveryType(id:number):Observable<Array<DeliveryType>>{
    return this.http.delete<Array<DeliveryType>>(this.url+"/GetRemoveDeliveryType"+id)}
}
