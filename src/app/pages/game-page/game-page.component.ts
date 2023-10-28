import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
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

	data: Question[] = [];

	currentIndex: number = 0;
	currentQuestion: Question;

	message: string;

	constructor(private appService: AppService) {}

	ngOnInit() {
		this.getData();
	}

	onAnswerSelect(result: QuestionResult): void {
		if (result.valid) {
			this.data[this.currentIndex].answers = result.answers;
		}
		this.currentQuestion._valid = result.valid;
	}

	next(): void {
		if (this.checkState()) {
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
		this.clearMesasge();

		if (!this.currentQuestion?._valid) {
			this.setMessage(`At least select ${this.currentQuestion.answer.minAnswer}`);

			return false;
		}
		return true;
	}

	private getData(): void {
		this.appService.getAll().subscribe((data) => {
			this.data = data;

			this.currentQuestion = this.data[this.currentIndex];
		});
	}

	private setMessage(message: string): void {
		this.message = message;
	}

	private clearMesasge(): void {
		this.message = null;
	}
}
