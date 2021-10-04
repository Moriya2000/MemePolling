import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {GrecaptchaModule} from 'ng-grecaptcha'
// import { AngularFireModule } from "@angular/fire";
// import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MemesVotingComponent } from './components/memes-voting/memes-voting.component';
import { GeneralService } from './general.service';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { environment } from "src/environments/environment";
import { HistoryVotingComponent } from './components/history-voting/history-voting.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    MemesVotingComponent,
    CaptchaComponent,
    HistoryVotingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    GrecaptchaModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
