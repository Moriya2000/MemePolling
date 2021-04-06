import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationsRoute } from '../classes/DestinationsRoute';

@Injectable({
  providedIn: 'root'
})
export class DestinationsRouteService {

  listDestinationsRoute:Array<DestinationsRoute>=new Array<DestinationsRoute>();
  newDestinationsRoute:DestinationsRoute=new DestinationsRoute();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/DestinationsRoute"

  //שליפת רשימת יעדים במסלול
  GatAllDestinationsRoute():Observable<Array<DestinationsRoute>>{
    return this.http.get<Array<DestinationsRoute>>(this.url+"/GatAllDestinationsRoute")}
            
  //שליפת יעד במסלול לפי קוד   
  GetIdDestinationsRoute(id:number):Observable<Array<DestinationsRoute>>{
    return this.http.get<Array<DestinationsRoute>>(this.url+"/GetIdDestinationsRoute"+id)}
              
  //הוספת יעד במסלול 
  GetAddDestinationsRoute(c:DestinationsRoute):Observable<Array<DestinationsRoute>>{
    return this.http.put<Array<DestinationsRoute>>(this.url+"/GetAddDestinationsRoute",c)}
          
  //עדכון יעד במסלול  
  GetUpdatDestinationsRoute(c:DestinationsRoute):Observable<Array<DestinationsRoute>>{
    return this.http.post<Array<DestinationsRoute>>(this.url+"/GetUpdatDestinationsRoute",c)}
          
  //מחיקת יעד במסלול  
  GetRemoveDestinationsRoute(id:number):Observable<Array<DestinationsRoute>>{
    return this.http.delete<Array<DestinationsRoute>>(this.url+"/GetRemoveDestinationsRoute"+id)}
}
