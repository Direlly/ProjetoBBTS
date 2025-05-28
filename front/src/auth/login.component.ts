import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cpf = '';
  senha = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.cpf, this.senha).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/cliente/chat']);
      },
      error: () => alert('Credenciais inválidas')
    });
  }
}
