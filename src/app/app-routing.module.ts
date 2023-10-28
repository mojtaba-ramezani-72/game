import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'game-page', loadChildren: async () => (await import('./pages/auth/register-page/register-page.module')).RegisterModule },
  { path: 'register-page', loadChildren: async () => (await import('./pages/auth/register-page/register-page.module')).RegisterModule },
	{ path: 'login-page', loadChildren: async () => (await import('./pages/auth/login-page/login-page.module')).LoginModule },
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
