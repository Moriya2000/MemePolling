import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  memes: any
  firstTime:boolean = true

  constructor(private http: HttpClient) {
    setInterval( ()=>{
      this.initalizeMemes().subscribe(data => {
        this.memes = data
        this.memes = this.memes.memes
        console.log(data);
      }
        , err => console.log(err))
    },24*60* 60*1000)
   }

  url: string = "https://us-central1-nodal-descent-326009.cloudfunctions.net/"
  userId:string = ""
  conected:boolean=false;
  typeUserClient:boolean=false;
  typeUserManager:boolean=false;
  typeUserWithPermission:boolean=false;

  voting(memeId: any) {
    return this.http.get(`${this.url}votingProcess?memeId=${memeId}`)
  }

  createCaptcha(response: any) {
    return this.http.post(`${this.url}submitCaptcha`, { res: response })
  }

  votingHistory() {
    return this.http.get(`${this.url}votingHistory?userId=${this.userId}`)
  }

  initalizeMemes() {
    return this.http.get(`${this.url}initalizeMemes`)
  }
  
  getUsers() {
    return this.http.get(`${this.url}getUsers`)
  }
  
  IsUsersWithPermission()
  {
    return this.http.get(`${this.url}IsUsersWithPermission?userId=${this.userId}`)
  }
  
  givePermission(userId: any) {
    return this.http.get(`${this.url}givePermission?userId=${userId}`)
  }
  signUp(userDetails:any)
  {
    return this.http.post(`${this.url}signUp`, userDetails)
  }
}
