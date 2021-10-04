import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  constructor(private general:GeneralService) { }

  ngOnInit(): void {
  }
  sendResponse(){
    let response = grecaptcha.getResponse()
    this.general.createCaptcha(response).subscribe(data=>console.log(data), err=> console.log(err))
  }

}
