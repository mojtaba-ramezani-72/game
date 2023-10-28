export interface Question {
	id: number;
	questionTitle: string;
	answer: Answer;
	score: number;
	answers?: number[];
	_valid?: boolean;
}

export interface Answer {
	minAnswer: number;
	maxAnswer: number;
	items: AnswerItem[];
}

export interface AnswerItem {
	id: number;
	title: string;
}

export interface QuestionResult {
	questionId: number;
	answers: number[];
	valid: boolean;
}
