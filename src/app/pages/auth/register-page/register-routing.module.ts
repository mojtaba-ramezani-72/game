import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CanActivateTeam } from '../../../app.guard';
import { RegisterPageComponent } from './register-page.component';

const routes: Routes = [
	{ path: '**', component: RegisterPageComponent/*, canActivate: [CanActivateTeam]*/ },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RegisterRoutingModule {}
