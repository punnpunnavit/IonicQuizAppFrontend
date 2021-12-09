import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {Questions} from '../model/questions.model'
import { QuestionsProviderService } from '../questions-provider.service';
@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage {
  public question$: Observable<Questions>;
  constructor(private router:Router, public alertController: AlertController,public provider:QuestionsProviderService) { }


  ionViewDidEnter(){
    this.question$=this.provider.getQuestions();
  }
}
