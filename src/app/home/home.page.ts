import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {Questions} from '../model/questions.model'
import { QuestionsProviderService } from '../questions-provider.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public question$: Observable<Questions>;
  constructor(private router:Router, public alertController: AlertController,public provider:QuestionsProviderService) {}
go(){
  this.router.navigateByUrl('/scoreboard');
}
showPrompt() {
  this.alertController.create({
    header: 'Enter you name',
    subHeader: 'Rank yourself in the world ranking',
    inputs: [
      {
        name: 'Username',
        placeholder: 'Your Name',
        
      },
    ],
    buttons: [
      {
        text: 'Done',
        handler: (data: any) => {
          console.log('Saved Information', data);
        }
      }
    ]
  }).then(res => {
    res.present();
  });
}Copy


ionViewDidEnter(){
  this.showPrompt()
  this.question$=this.provider.getQuestions();
  
}
}
