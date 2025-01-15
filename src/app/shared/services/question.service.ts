import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  fetchQuestions() {
    return this.httpClient.get<Question[]>('http://localhost:3000/questions');
  }

  constructor(private httpClient: HttpClient) {}
  private currentQuestionIndex!: number;
  private questionSubject: BehaviorSubject<Question | null> =
    new BehaviorSubject<Question | null>(null);
  private questions!: Question[];
  currentquestions = this.questionSubject.asObservable();

  setQuestions(questions: Question[]) {
    this.questions = questions;
    if (questions.length > 0) {
      this.currentQuestionIndex = 0;
      this.questionSubject.next(this.questions[this.currentQuestionIndex]);
    }
  }

  getNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length && this.currentQuestionIndex !== this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.questionSubject.next(this.questions[this.currentQuestionIndex]);
    } else {
      this.questionSubject.complete();
    }
  }
}
