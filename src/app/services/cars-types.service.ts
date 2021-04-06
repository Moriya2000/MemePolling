import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsTypes } from '../classes/CarsTypes';

@Injectable({
  providedIn: 'root'
})
export class CarsTypesService {

  listCarsTypes:Array<CarsTypes>=new Array<CarsTypes>();
  newCarsTypes:CarsTypes=new CarsTypes();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/CarsTypes"

  //שליפת רשימת רכבים
  GatAllCarsTypes():Observable<Array<CarsTypes>>{
    return this.http.get<Array<CarsTypes>>(this.url+"/GatAllCarsTypes")}
  
  //שליפת רכבים לפי קוד   
  GetIdCarsTypes(id:number):Observable<Array<CarsTypes>>{
    return this.http.get<Array<CarsTypes>>(this.url+"/GetIdCarsTypes"+id)}
    
  //הוספת סוג רכב  
  GetAddCarsTypes(c:CarsTypes):Observable<Array<CarsTypes>>{
    return this.http.put<Array<CarsTypes>>(this.url+"/GetAddDay",c)}

  //עדכון סוג רכב  
  GetUpdatCarsTypes(c:CarsTypes):Observable<Array<CarsTypes>>{
    return this.http.post<Array<CarsTypes>>(this.url+"/GetUpdatDay",c)}

  //מחיקת סוג רכב  
  GetRemoveCarsTypes(id:number):Observable<Array<CarsTypes>>{
    return this.http.delete<Array<CarsTypes>>(this.url+"/GetRemoveCarsTypes"+id)}

}

