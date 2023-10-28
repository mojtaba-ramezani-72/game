import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './question.service';
import { Question, QuestionResult } from 'src/app/model/question.model';

declare const bootstrap: any;
@Component({
	selector: 'app-game-page',
	templateUrl: './game-page.component.html',
	styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
	@ViewChild('carousel') carouselElm: ElementRef;

	private _carousel: any = null;
	private get carousel(): any {
		if (this._carousel) return this._carousel;

		this._carousel = new bootstrap.Carousel(this.carouselElm.nativeElement);

		return this._carousel;
	}

  isGameStarted = false;

	data: Question[] = [];

	currentIndex: number = 0;
	currentQuestion: Question;

	message: string;

	constructor(private questionService: QuestionService) {}

	ngOnInit() {
		this.getData();
	}

	onAnswerSelect(result: QuestionResult): void {
		if (result.clickedStatus === 'clicked') {
			this.data[this.currentIndex].answers = result.answers;
      this.currentQuestion._valid = true;
		}
		// this.currentQuestion._valid = result.valid;
		// this.currentQuestion._valid = result.valid;
	}

	next(): void {
		if (this.checkState()) {
      // this.getCorrectAnswer(this.currentQuestion.id);
			this.carousel.next();

			this.currentIndex++;

			this.currentQuestion = this.data[this.currentIndex];
		}
	}

	prev(): void {
		if (this.checkState()) {
			this.carousel.prev();

			this.currentIndex--;

			this.currentQuestion = this.data[this.currentIndex];
		}
	}

	private checkState(): boolean {
		this.clearMessage();

		if (!this.currentQuestion?._valid) {
			this.setMessage(`At least select ${this.currentQuestion.answer.minAnswer}`);

			return false;
		}
		return true;
	}

	private getData(): void {
		this.questionService.getAll().subscribe({
      complete: () => {},
      error: () => {
        alert('something was wrong');
      },
      next: (res) => {
        this.data = res;
        this.currentQuestion = this.data[this.currentIndex];
      }
		});
	}

  private getCorrectAnswer(questionId: number): void {
    this.questionService.getCorrectAnswer(questionId).subscribe({
      complete: () => {},
      error: () => {
        alert('something was wrong');
      },
      next: (res) => {
      }
    });
  }

	private setMessage(message: string): void {
		this.message = message;
	}

	private clearMessage(): void {
		this.message = null;
	}

  public start(): void {
    this.isGameStarted = true;
  }
}
