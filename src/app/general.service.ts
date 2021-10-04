import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  url:string = "http://localhost:3000/"

  voting(memeId: any)
  {
return this.http.get(`${this.url}/voting/${memeId}`)
  }

  createCaptcha(response:any)
  {
    return this.http.post(`${this.url}createCaptcha`, {res:response})
  }
  

//   app.use("/voting/:memeId", voting)
// app.use("/votingHistory/:userName/:password", votingHistory)
// app.use("/initalizeMemes", initalizeMemes)
// app.use("/getUsers", getUsers)
// app.use("/givePermission/:userId", givePermission)
// app.post('/createCaptcha', submit)

  constructor(private http:HttpClient) { }
}
