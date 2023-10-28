import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateTeam } from './app.guard';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
	{ path: 'game-page', component: GamePageComponent, canActivate: [CanActivateTeam] },
	{ path: 'register-page', component: RegisterPageComponent, canActivate: [CanActivateTeam] },
	{ path: 'login-page', component: LoginPageComponent },
	{ path: '**', component: LoginPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
