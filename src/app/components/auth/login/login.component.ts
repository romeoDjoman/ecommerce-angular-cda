import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Connexion réussie', response);
          // Store JWT in local storage
          localStorage.setItem('jwt', response.bearer);
        },
        error: (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Échec de la connexion. Veuillez vérifier vos identifiants et réessayer'
        }
      });
    }
  }

}
