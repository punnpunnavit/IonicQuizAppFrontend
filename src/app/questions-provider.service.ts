import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Questions} from '../../src/app/model/questions.model'


@Injectable({
  providedIn: 'root'
})
export class QuestionsProviderService {
  
  
  constructor(public http:HttpClient) { }

  getQuestions(){
    return this.http.get<Questions>(`http://8049-35-196-195-237.ngrok.io`)
  } 

  getScoreBoard(){
    return this.http.get<Questions>(`http://8049-35-196-195-237.ngrok.io/scoreboard`)
  }
 
}