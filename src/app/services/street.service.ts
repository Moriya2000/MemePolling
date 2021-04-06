import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Street } from '../classes/Street';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  listStreet:Array<Street>=new Array<Street>();
  newStreet:Street=new Street();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Street"

  //שליפת רשימת רחובות
  GatAllStreet():Observable<Array<Street>>{
    this.newStreet.StreetID=0;
    return this.http.get<Array<Street>>(this.url+"/GatAllStreet")}
            
  //שליפת רחוב לפי קוד   
  GetIdStreet(id:number):Observable<Array<Street>>{
    return this.http.get<Array<Street>>(this.url+"/GetIdStreet"+id)}
              
  //הוספת רחוב 
  GetAddStreet(c:Street):Observable<Array<Street>>{
    return this.http.put<Array<Street>>(this.url+"/GetAddStreet",c)}
          
  //עדכון רחוב  
  GetUpdatStreet(c:Street):Observable<Array<Street>>{
    return this.http.post<Array<Street>>(this.url+"/GetUpdatStreet",c)}
          
  //מחיקת רחוב  
  GetRemoveStreet(id:number):Observable<Array<Street>>{
    return this.http.delete<Array<Street>>(this.url+"/GetRemoveStreet"+id)}
}
