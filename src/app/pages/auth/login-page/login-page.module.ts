import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanActivateTeam } from '../../../app.guard';
import { LoginPageComponent } from './login-page.component';
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CanActivateTeam],
})

export class LoginModule { }
