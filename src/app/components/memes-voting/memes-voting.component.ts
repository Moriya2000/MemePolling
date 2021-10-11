import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-memes-voting',
  templateUrl: './memes-voting.component.html',
  styleUrls: ['./memes-voting.component.css']
})
export class MemesVotingComponent implements OnInit {

  constructor(public generalService: GeneralService, private router: Router) { }
  clickSuccess: boolean = false
  clickErr: boolean = false
  selectedMeme = ""

  ngOnInit(): void {
    if(this.generalService.firstTime)
    {
      this.generalService.firstTime = false
      this.generalService.initalizeMemes().subscribe(data => {
        this.generalService.memes = data
        this.generalService.memes = this.generalService.memes.memes
        console.log(data)
      })
    }
  }

  submit() {
    let response = grecaptcha.getResponse()
    this.generalService.createCaptcha(response).subscribe(data => {
      this.generalService.voting(this.selectedMeme).subscribe(res => {
        console.log(res); this.clickSuccess = true
      }
        , err => { console.log(err); this.clickSuccess = false; this.clickErr = true })
    }, err => { console.log(err); this.clickSuccess = false; this.clickErr = true })
  }
}
