import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllOrder } from '../classes/AllOrder';
import { Order } from '../classes/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  listOrder:Array<Order> = new Array<Order>()
  newOrder:Order=new Order();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Order"

  //שליפת רשימת הזמנות
  GatAllOrder():Observable<Array<Order>>{
    return this.http.get<Array<Order>>(this.url+"/GatAllOrder")}
            
  //שליפת הזמנה לפי קוד   
  GetIdOrder(id:number):Observable<Array<Order>>{
    return this.http.get<Array<Order>>(this.url+"/GetIdOrder/"+id)}
        
  //שליפת כל ההזמנות לפי קוד   
  GetAllIdOrder(id:number):Observable<Array<Order>>{
    return this.http.get<Array<Order>>(this.url+"/GetAllIdOrder/"+id)}
  
    //הוספת הזמנה
  GetAddOrder(c:Order):Observable<Array<Order>>{
    return this.http.put<Array<Order>>(this.url+"/GetAddOrder",c)}
          
  //עדכון הזמנה  
  GetUpdatOrder(c:Order):Observable<Array<Order>>{
    return this.http.post<Array<Order>>(this.url+"/GetUpdatOrder",c)}
          
  //מחיקת הזמנה  
  GetRemoveOrder(id:number):Observable<Array<Order>>{
    return this.http.delete<Array<Order>>(this.url+"/GetRemoveOrder"+id)}
}
