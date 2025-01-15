import { Component, OnInit, signal } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-q-card',
  imports: [CardModule, RadioButtonModule, CommonModule, FormsModule, ButtonModule],
  templateUrl: './q-card.component.html',
  styleUrl: './q-card.component.scss',
})
export class QCardComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  selectedoption = signal<number | null>(null);
  currentQuestion!: Question | null;
  showScore = signal(false);
  NoOfCorrectQues: number = 0;
  NoOfIncorrectQues: number = 0;
  totalQuestions: number[] = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

  ngOnInit(): void {
    this.getQuestions();
  }

  trackById(index: number, item: any) {
    return index;
  }

  getQuestions() {
    this.questionService.fetchQuestions().subscribe((questions: Question[]) => {
      this.questionService.setQuestions(questions);
      this.questionService.currentquestions.subscribe({
        next: (question: Question | null) => {
          this.currentQuestion = question;
        },
        complete: () => {
          this.currentQuestion = null;
          this.showScore.set(true);
        },
      });
    });
  }

  getAnswers(answers: Object) {
    return Object.values(answers).filter((item) => item !== null);
  }

  nextQuestion() {
    const correct_answers = Object.entries(
      this.currentQuestion?.correct_answers ?? {}
    );
    const isCorrect = correct_answers?.[+(this.selectedoption() ?? '7')]?.[1];
    isCorrect === 'true' ? this.NoOfCorrectQues++ : this.NoOfIncorrectQues++;
    console.log(this.currentQuestion?.correct_answers);
    console.log(this.selectedoption());
    this.selectedoption.set(null);
    this.questionService.getNextQuestion();
  }

  resetOptions() {
    this.selectedoption.set(null);
  }
}
