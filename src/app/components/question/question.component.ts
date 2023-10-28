import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question, QuestionResult } from 'src/app/model/question.model';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
	@Input() question: Question;

	@Output() onAnswerSelect = new EventEmitter<QuestionResult>();

	result: number[] = [];

	timer: number = 60;
	timerInterval: any;

	ngOnInit(): void {
		this.startTimer();

		if (this.question.answers?.length) this.result = this.question.answers;
	}

	setResult(id: number): void {
		const index: number = this.result.findIndex((val) => val === id);
		if (index < 0) {
			if (this.result.length < this.question.answer.maxAnswer) this.result.push(id);
		} else {
			this.result.splice(index, 1);
		}

		const valid: boolean = this.result.length >= this.question.answer.minAnswer && this.result.length <= this.question.answer.maxAnswer;

		this.onAnswerSelect.emit({ questionId: this.question.id, answers: this.result, valid });
	}

	private startTimer(): void {
		this.timerInterval = setInterval(() => {
			if (this.timer > 0) {
				this.timer -= 1;
			} else {
				clearInterval(this.timerInterval);
			}
		}, 1000);
	}
}
