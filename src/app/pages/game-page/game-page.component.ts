import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  data: Question[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAll().subscribe((data) => {
      this.data = data;
    });
  }
}
