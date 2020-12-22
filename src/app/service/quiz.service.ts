import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/Quiz';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  question: string = '';
  seconds: number = 0;
  timer: any;
  qnProgress: number = 0;
  options: any[] = [];
  id:number= 0 ;
  correctAnswerCount: number = 0;
  
  constructor(private http:HttpClient) { }

  displayTimeElapsed(){
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getAllQuetions(): Observable<Quiz[]>{
    return this.http.get<Quiz[]>("http://localhost:5000/quiz/questions");
  }


  getOptions(id:number): Observable<Quiz[]>{
    return this.http.get<Quiz[]>('http://localhost:5000/quiz/questions/'+id+'/options');
  }

  getAnswers(id:number): Observable<Quiz[]>{
    return this.http.get<Quiz[]>('http://localhost:5000/quiz/questions/'+id+'/answer');
  }

}
