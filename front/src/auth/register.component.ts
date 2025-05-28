import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  cpf = '';
  senha = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.cpf, this.senha).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: () => alert('Erro ao cadastrar. Verifique os dados.')
    });
  }
}