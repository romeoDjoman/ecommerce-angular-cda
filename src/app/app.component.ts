import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterComponent} from "./components/auth/register/register.component";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/auth/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    RegisterComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-angular-cda';
}
