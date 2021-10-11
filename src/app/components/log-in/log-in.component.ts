import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userName: string = ""
  password: string = ""
  clickErr:boolean=false
  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private service: GeneralService) { }

  ngOnInit(): void {
  }
  isPermission: any
  LogIn() {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(this.userName, this.password)
      .then(res => {
        if (res.user?.uid)
          this.service.userId = res.user.uid
        this.service.IsUsersWithPermission().subscribe(data => {
          this.isPermission = data
          this.service.typeUserWithPermission = this.isPermission.result
        }
        )
        this.service.conected = true
        console.log("You're in!");
        this.router.navigate(['/MemesVoting'])
      })
      .catch(err => {
        this.userName = ""
        this.password = ""
        this.clickErr=true
        this.service.conected = false
        console.log('Something went wrong:', err.message);
      });
  }

  LogInWithGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => {
        if (res.user?.uid) {
          this.service.userId = res.user.uid
          this.service.conected = true
          this.service.typeUserManager = true
        }
        console.log("You're in!");
        this.router.navigate(['/ManagerScreen'])
      })
      .catch(err => {
        this.service.conected = false
        this.clickErr=true
        console.log('Something went wrong:', err.message);
      });
  }

}
