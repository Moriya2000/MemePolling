import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllOrder } from '../classes/AllOrder';
import { TakingDelivery } from '../classes/TakingDelivery';

@Injectable({
  providedIn: 'root'
})

export class TakingDeliveryService {

  listTakingDelivery: Array<TakingDelivery> = new Array<TakingDelivery>();
  newTakingDelivery: AllOrder = new AllOrder();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/TakingDelivery"

  //שליפת כל ההזמנות 
  GetAddAllOrder(c: AllOrder): Observable<AllOrder> {
    this.newTakingDelivery.OrderDate = new Date();
    return this.http.put<AllOrder>(this.url + "/GetAddAllOrder", c);
  }
  //שליפה של רשימת ההזמנות מתוך רשימת המסלולים מתוך רשימת החברות
  GetAllOrder1(id: number): Observable<Array<Array<AllOrder>>> {
    return this.http.get<Array<Array<AllOrder>>>(this.url + "/GetAllOrderByIdCompany/" + id);
  }
  //עדכון הזמנה
  GetUpdatAllOrder(c: AllOrder): Observable<Array<AllOrder>> {
    debugger
    return this.http.post<Array<AllOrder>>(this.url + "/GetUpdatAllOrder", c);
  }
  //שליפת רשימת לקיחת משלוח
  GatAllTakingDelivery(): Observable<Array<TakingDelivery>> {
    return this.http.get<Array<TakingDelivery>>(this.url + "/GatAllTakingDelivery")
  }
  //שליפת לקיחת משלוח לפי קוד   
  GetAllOrder(): Observable<AllOrder> {
    return this.http.get<AllOrder>(this.url + "/GetAllOrder/" + this.newTakingDelivery.OrderID)
  }
  //הוספת לקיחת משלוח 
  GetAddTakingDelivery(c: TakingDelivery): Observable<Array<TakingDelivery>> {
    return this.http.put<Array<TakingDelivery>>(this.url + "/GetAddTakingDeliver", c)
  }
  //עדכון לקיחת משלוח  
  GetUpdatTakingDelivery(c: TakingDelivery): Observable<Array<TakingDelivery>> {
    return this.http.post<Array<TakingDelivery>>(this.url + "/GetUpdatTakingDelivery", c)
  }
  //מחיקת לקיחת משלוח  
  GetRemoveTakingDelivery(id: number): Observable<Array<TakingDelivery>> {
    return this.http.delete<Array<TakingDelivery>>(this.url + "/GetRemoveTakingDelivery" + id)
  }
}
