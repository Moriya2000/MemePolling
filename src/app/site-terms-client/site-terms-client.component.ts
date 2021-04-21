import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-site-terms-client',
  templateUrl: './site-terms-client.component.html',
  styleUrls: ['./site-terms-client.component.css']
})
export class SiteTermsClientComponent implements OnInit {

  constructor(public clientService:ClientService, public route:Router) { }
  aaa: boolean = false
  a: boolean = false
  ngOnInit(): void {
  }
  //הוספת לקוח
  addClient() {
    debugger
    this.clientService.GetAddClient().subscribe(data => {
      this.clientService.clientConected = this.clientService.newClient;
      this.clientService.typeUserClient = true;
      this.clientService.conected = true
      this.route.navigate(['/Delivery']);
    }, err => { alert("error" + err) })
    // this.clientService.newClient = new Client();
  }

}
