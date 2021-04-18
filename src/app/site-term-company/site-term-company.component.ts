import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-site-term-company',
  templateUrl: './site-term-company.component.html',
  styleUrls: ['./site-term-company.component.css']
})
export class SiteTermCompanyComponent implements OnInit {

  constructor(public clientService:ClientService) { }

  ngOnInit(): void {
  }

}
