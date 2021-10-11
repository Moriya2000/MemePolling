import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/general.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private service: GeneralService) { }

  ngOnInit(): void {
  }
  userName: string = ""
  password: string = ""
  confirmPassword: string = ""
  clickErr: boolean = false

  SignUp() {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(this.userName, this.password)
      .then(res => {
        let userId = res.user?.uid
        this.service.signUp({"userId":userId, "userName":this.userName, "password":this.password}).subscribe(data => {
           this.router.navigate(['/MemesVoting'])
           this.service.conected = true
           console.log(data);
         },(err =>{
            console.log(err)}))
      })
      .catch(error => {
        this.service.conected = false
        this.userName = ""
        this.password = ""
        this.confirmPassword = ""
        this.clickErr = true
        console.log('Something is wrong:', error.message);
      });
  }
}


