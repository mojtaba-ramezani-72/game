import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  constructor(private authService: AuthService) {}

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe((data) => {
      console.log("done!")
      console.log(data)
    });
  }
}
