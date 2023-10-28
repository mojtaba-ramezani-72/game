import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAll().subscribe(data => {
      console.log(data)
    });
  }
}
