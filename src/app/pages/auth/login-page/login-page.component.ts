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
    this.authService.login().subscribe({
      complete: () => {},
      error: () => {
        alert('something was wrong');
      },
      next: (res) => {
        const user = res.find((a: any) => {
          const { email, password } = this.loginForm.value;
          return a.email === email && a.password === password;
        });

        if (user) {
          alert("you are successfully login :)")
        } else {
          alert("user Not Found")
        }

      },
    })
  }

}
