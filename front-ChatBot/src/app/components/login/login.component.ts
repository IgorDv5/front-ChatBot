import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

 login(): void {
  this.authService.login(this.email, this.password).subscribe(
    (response) => {
      localStorage.setItem('token', response.token);
      alert('Login bem-sucedido!');
      
    },
    (error) => {
      alert('Falha no login');
    }
  );
}


}