import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,NgIf, FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-ChatBot';

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}