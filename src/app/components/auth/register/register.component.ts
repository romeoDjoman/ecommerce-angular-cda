import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)
    }, { validators: this.passwordConfirmationValidator });
  }

  ngOnInit(): void {}

  passwordConfirmationValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { confirm: true };
    }
    return null;
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe((res) => {
        console.log(res);
      })
    } else {
      console.error("Le formulaire n'est pas valide");
    }
  }

  getErrorMessage(controlName: string, errorName: string): string {
    if (controlName === 'email' && errorName === 'email') {
      return "L'adresse email est invalide";
    }
    return `Le champ ${controlName} est requis`;
  }
}
