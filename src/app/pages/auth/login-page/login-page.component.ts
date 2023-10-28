import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private authService: AuthService) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login({ email, password }).subscribe({
      complete: () => {},
      error: () => {
        alert('something was wrong');
      },
      next: (user: any) => {
        if (user && user.length) {
          alert("you are successfully login :)")
        } else {
          alert("user Not Found")
        }

      },
    })
  }

}
