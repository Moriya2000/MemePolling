import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';;

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';

import { BusinessDaysService } from './services/business-days.service';
import { CarsTypesService } from './services/cars-types.service';
import { CityService } from './services/city.service';
import { ClientService } from './services/client.service';
import { CompanyBankDetailsService } from './services/company-bank-details.service';
import { DeliveryRoutesService } from './services/delivery-routes.service';
import { DeliveryTypeService } from './services/delivery-type.service';
import { DeliveryUrgencyService } from './services/delivery-urgency.service';
import { DestinationsRouteService } from './services/destinations-route.service';
import { GivingDeliveryService } from './services/giving-delivery.service';
import { OrderService } from './services/order.service';
import { SendingCompanyService } from './services/sending-company.service';
import { StreetService } from './services/street.service';
import { TakingDeliveryService } from './services/taking-delivery.service';
import { SiteTermsClientComponent } from './site-terms-client/site-terms-client.component';
import { OrderComponent } from './order/order.component';
import { BusinessDayComponent } from './business-day/business-day.component';


const rout: Routes=[
  {path:"ClientRegister",component:ClientRegisterComponent},
  {path:"Home",component:HomeComponent},
  {path:"ClientLogin",component:ClientLoginComponent},
  {path:"Order",component:OrderComponent},

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
    OrderComponent,
    BusinessDayComponent,
  ],
  imports: [
    RouterModule.forRoot(rout),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClientService,OrderService,TakingDeliveryService],
  // BusinessDaysService,CarsTypesService,CityService,,CompanyBankDetailsService,DeliveryRoutesService,
  // DeliveryTypeService,DeliveryUrgencyService,DestinationsRouteService,GivingDeliveryService,SendingCompanyService,
  // StreetService
  bootstrap: [AppComponent]
})
export class AppModule { }
