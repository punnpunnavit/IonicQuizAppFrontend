import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {Questions} from '../model/questions.model'
import { QuestionsProviderService } from '../questions-provider.service';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.page.html',
  styleUrls: ['./scoreboard.page.scss'],
})
export class ScoreboardPage  {
  public scoreboard$: Observable<Questions>;
  constructor(private router:Router, public alertController: AlertController,public provider:QuestionsProviderService) { }


  ionViewDidEnter(){
    this.scoreboard$=this.provider.getScoreBoard()
    console.log(this.scoreboard$)
  }
}
