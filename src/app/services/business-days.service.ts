import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessDays } from '../classes/BusinessDays';

@Injectable({
  providedIn: 'root'
})
export class BusinessDaysService {

  listBusinessDays:Array<BusinessDays>=new Array<BusinessDays>();
  newBusinessDays:BusinessDays=new BusinessDays();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Client"

  //הוספת יום עבודה
  GetAddDay(c:BusinessDays):Observable<Array<BusinessDays>>{
    this.newBusinessDays.BusinessDaysID=0;
    return this.http.put<Array<BusinessDays>>(this.url+"/GetAddDay",c);}

  //שליפת רשימת ימי עסקים
  GatAllDays():Observable<Array<BusinessDays>>{
    return this.http.get<Array<BusinessDays>>(this.url+"/GatAllDays")}

  //שליפת ימי עבודה על פי קוד
  GetIdBusinessDays(id:number):Observable<Array<BusinessDays>>{
    return this.http.get<Array<BusinessDays>>(this.url+"/GetIdBusinessDays"+id)}

  //עדכון יום עבודה
  GetUpdatDay(c:BusinessDays):Observable<Array<BusinessDays>>{
    return this.http.post<Array<BusinessDays>>(this.url+"/GetUpdatDay",c)}

  //מחיקת יום עבודה
  GetRemoveDay(id:number):Observable<Array<BusinessDays>>{
    return this.http.delete<Array<BusinessDays>>(this.url+"/GetRemoveDay"+id)}

}


