import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GrecaptchaModule } from 'ng-grecaptcha'
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuth } from "@angular/fire/auth"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MemesVotingComponent } from './components/memes-voting/memes-voting.component';
import { GeneralService } from './general.service';
import { environment } from "src/environments/environment";
import { NavComponent } from './components/nav/nav.component';
import { HistoryVotingComponent } from './components/history-voting/history-voting.component';
import { ManagerScreenComponent } from './components/manager-screen/manager-screen.component';
import { GivePermissionComponent } from './components/give-permission/give-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    MemesVotingComponent,
    HistoryVotingComponent,
    NavComponent,
    ManagerScreenComponent,
    GivePermissionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    GrecaptchaModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [GeneralService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
