import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
	constructor(private router: Router, private authService: AuthService, private storageService: StorageService) {}

	loginForm: FormGroup = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	});

	onSubmit() {
		this.authService.login().subscribe({
			complete: () => {},
			error: () => {
				alert('something was wrong');
			},
			next: (res) => {
				const { email, password } = this.loginForm.value;
				const user = res.find((a: any) => {
					return a.email === email && a.password === password;
				});

				console.log('user: ', user);
				if (user) {
					this.storageService.setItem('userinfo', { email });
					this.storageService.setItem('token', btoa(email));

					this.router.navigate(['game-page']);
				} else {
					alert('user Not Found');
				}
			},
		});
	}
}
