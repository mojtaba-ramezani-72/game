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

	ngOnInit(): void {
		if (this.question.answers?.length) this.result = this.question.answers;
	}

	setResult(id: number): void {
		const index: number = this.result.findIndex((val) => val === id);
    let clickedStatus;
		if (index < 0) {
      clickedStatus = 'clicked';
			// if (this.result.length < this.question.answer.maxAnswer) this.result.push(id);
			this.result.push(id);
		} else {
      clickedStatus = 'unClicked';
      this.result.splice(index, 1);
		}
		// const valid: boolean = this.result.length >= this.question.answer.minAnswer && this.result.length <= this.question.answer.maxAnswer;
		// this.onAnswerSelect.emit({ questionId: this.question.id, answers: this.result, valid });
		this.onAnswerSelect.emit({ questionId: this.question.id, answers: this.result, clickedStatus });
	}

}
