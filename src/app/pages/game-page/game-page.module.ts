import { NgModule } from '@angular/core';
import { CanActivateTeam } from '../../app.guard';
import { GamePageComponent } from './game-page.component';
import { GameRoutingModule } from "./game-routing.module";

@NgModule({
  declarations: [
    GamePageComponent
  ],
  imports: [
    GameRoutingModule,
  ],
  providers: [CanActivateTeam],
})
export class GameModule { }
