import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllOrder } from '../classes/AllOrder';
import { DeliveryRoutes } from '../classes/DeliveryRoutes';
import { TaskLogComponent } from '../task-log/task-log.component';

@Injectable({
  providedIn: 'root'
})
export class DeliveryRoutesService {

  listDeliveryRoutes:Array<DeliveryRoutes>=new Array<DeliveryRoutes>();
  newDeliveryRoutes:DeliveryRoutes=new DeliveryRoutes();
  kod1=1;

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/DeliveryRoutes"

  GetSendEmail(email:string,sendListOrderToWorker:Array<string>):Observable<number>{
    return this.http.post<number>(this.url+"/GetSendEmail/"+email+"/"+this.kod1,sendListOrderToWorker)}

  //שליפת רשימת מסלול משלוחים
  GatAllDeliveryRoutes():Observable<Array<DeliveryRoutes>>{
    return this.http.get<Array<DeliveryRoutes>>(this.url+"/GatAllDeliveryRoutes")}
        
  //שליפת מסלול משלוח לפי קוד   
  GetIdDeliveryRoutes(id:number):Observable<Array<DeliveryRoutes>>{
    return this.http.get<Array<DeliveryRoutes>>(this.url+"/GetIdDeliveryRoutes/"+id)}
          
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
