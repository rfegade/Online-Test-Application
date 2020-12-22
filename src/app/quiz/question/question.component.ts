import { Component, EventEmitter, Input, OnInit, Output, DoCheck } from '@angular/core';
import { Quiz } from 'src/app/models/Quiz';
import { QuizService } from 'src/app/service/quiz.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, DoCheck {

  @Input() questionIndex: number =0;
  currentQuestion: any ;
  currentOptions: any;
  @Output() answers = new EventEmitter<{user_answer: string, correct_answer: string}>();
  userAnswer: string = '';
  correctAnswer: any;
  disablebutton: boolean = false;
  @Output() totalQuestions = new EventEmitter<number>();

  questions:Quiz[] = [];

  constructor(public quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.seconds = 0;
    this.questionIndex = 0;

    this.quizService.getAllQuetions().subscribe((result:any)=>{
      this.questions = result;
      //this.startTimer();
    });  

    this.totalQuestions.emit(this.questions.length);
  }

  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.questionIndex]?.question;
    this.currentOptions = this.questions[this.questionIndex]?.options;
  }
  setUserAnswer(option: string) {
    this.disablebutton=true
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.questionIndex]?.answer;
    this.answers.emit(
      {user_answer: this.userAnswer, correct_answer: this.correctAnswer});
  }
  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

}
