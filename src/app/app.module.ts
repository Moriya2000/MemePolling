import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';;

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { CityService } from './services/city.service';
import { ClientService } from './services/client.service';
import { GivingDeliveryService } from './services/giving-delivery.service';
import { OrderService } from './services/order.service';
import { TakingDeliveryService } from './services/taking-delivery.service';
import { SiteTermsClientComponent } from './site-terms-client/site-terms-client.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AllDetailsCompanyComponent } from './all-details-company/all-details-company.component';
import { SiteTermCompanyComponent } from './site-term-company/site-term-company.component';
import { TaskLogComponent } from './task-log/task-log.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { PayComponent } from './pay/pay.component';
import { AddressPrintingComponent } from './address-printing/address-printing.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { NoteComponent } from './note/note.component';
import { google } from "google-maps";
import {GooglePlaceModule} from "ngx-google-places-autocomplete";
import { LoginCompanyComponent } from './login-company/login-company.component';
import { MyRoutesComponent } from './my-routes/my-routes.component';

const rout: Routes=[
  {path:"ClientRegister",component:ClientRegisterComponent},
  {path:"Home",component:HomeComponent},
  {path:"ClientLogin",component:ClientLoginComponent},
  {path:"Delivery",component:DeliveryComponent},
  {path:"AllDetailsCompany",component:AllDetailsCompanyComponent},
  {path:"SiteTermsClient",component:SiteTermsClientComponent},
  {path:"SiteTermCompany",component:SiteTermCompanyComponent},
  {path:"TaskLog",component:TaskLogComponent},
  {path:"OrderTracking",component:OrderTrackingComponent},
  {path:"Pay",component:PayComponent},
  {path:"AddressPrinting",component:AddressPrintingComponent},
  {path:"OrderConfirmation",component:OrderConfirmationComponent},
  {path:"Note",component:NoteComponent},
  {path:"LoginCompany",component:LoginCompanyComponent},
  {path:"MyRoutes",component:MyRoutesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ClientLoginComponent,
    ClientRegisterComponent,
    SiteTermsClientComponent,
    DeliveryComponent,
    AllDetailsCompanyComponent,
    SiteTermCompanyComponent,
    TaskLogComponent,
    OrderTrackingComponent,
    PayComponent,
    AddressPrintingComponent,
    OrderConfirmationComponent,
    NoteComponent,
    LoginCompanyComponent,
    MyRoutesComponent,
  ],
  imports: [
    RouterModule.forRoot(rout),
    BrowserModule,
    FormsModule,
    HttpClientModule,
     GooglePlaceModule
  ],
  providers: [ClientService,CityService,OrderService,GivingDeliveryService,TakingDeliveryService,],
  // BusinessDaysService,CarsTypesService,,CompanyBankDetailsService,DeliveryRoutesService,
  // DeliveryTypeService,DeliveryUrgencyService,DestinationsRouteService,SendingCompanyService,
  // StreetService
  bootstrap: [AppComponent]
})
export class AppModule { }
