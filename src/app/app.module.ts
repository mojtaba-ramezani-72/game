import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanActivateTeam } from './app.guard';
import { QuestionComponent } from './components/question/question.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    QuestionComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CanActivateTeam],
  bootstrap: [AppComponent]
})
export class AppModule { }
