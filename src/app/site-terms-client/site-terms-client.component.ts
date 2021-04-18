import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-site-terms-client',
  templateUrl: './site-terms-client.component.html',
  styleUrls: ['./site-terms-client.component.css']
})
export class SiteTermsClientComponent implements OnInit {

  constructor(public clientService:ClientService) { }

  ngOnInit(): void {
  }

}
