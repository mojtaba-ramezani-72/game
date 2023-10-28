import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanActivateTeam } from '../../../app.guard';
import { RegisterPageComponent } from './register-page.component';
import { RegisterRoutingModule } from "./register-routing.module";

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CanActivateTeam],
})
export class RegisterModule { }
