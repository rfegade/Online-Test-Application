import { Component, Output, OnInit } from '@angular/core';
import { QuestionComponent } from '../quiz/question/question.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentIndex = 0;
  answers: any;
  score: number = 0;
  totalQuestions: number = 3;
  quizOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  receiveAnswers(receivedAnswers: any) {
    this.answers = receivedAnswers;
  }

  goNext() {
    if (this.answers.user_answer !== null){
      this.currentIndex++;
      this.updateScore();
    }
    
      if (this.currentIndex === this.totalQuestions){
        this.endQuiz();
      }
    
  }

  updateScore(){
    if (this.answers.user_answer === this.answers.correct_answer) {
      this.score++;
    }
  }

  restartQuiz() {
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }


  getTotalQuestions(totalQuestions: number) {
    this.totalQuestions = totalQuestions;
  }
  
  endQuiz(){
    this.quizOver = true;
    alert('Quiz Over! Score is ' + this.score + '/ ' + this.totalQuestions);
  }

  goPrevious() {
    this.currentIndex--;
  }

}
