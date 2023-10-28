import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';

const routes: Routes = [
  { path: 'game-page', component: GamePageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'login-page', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
