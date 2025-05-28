import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nome = '';
  email = '';
  cpf = '';
  senha = '';
  confirmarSenha = '';

  constructor(
    private auth: AuthService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  formatCPF() {
    // Remove tudo que não é dígito
    let value = this.cpf.replace(/\D/g, '');
    
    // Aplica a máscara: 000.000.000-00
    if (value.length > 3) {
      value = value.substring(0, 3) + '.' + value.substring(3);
    }
    if (value.length > 7) {
      value = value.substring(0, 7) + '.' + value.substring(7);
    }
    if (value.length > 11) {
      value = value.substring(0, 11) + '-' + value.substring(11);
    }
    
    // Limita a 11 caracteres (com máscara)
    this.cpf = value.substring(0, 11);
  }

  register() {
    if (this.senha !== this.confirmarSenha) {
      this.snackBar.open('As senhas não coincidem', 'Fechar', {
        duration: 5000
      });
      return;
    }

    // Remove a máscara do CPF antes de enviar
    const cpfSemMascara = this.cpf.replace(/\D/g, '');

    this.auth.register(
      this.nome,
      this.email,
      cpfSemMascara,
      this.senha
    ).subscribe({
      next: () => {
        this.snackBar.open('Cadastro realizado com sucesso!', 'Fechar', {
          duration: 3000
        });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        let errorMessage = 'Erro ao realizar cadastro. Tente novamente.';
        if (err.error && err.error.message) {
          errorMessage = err.error.message;
        }
        this.snackBar.open(errorMessage, 'Fechar', {
          duration: 5000
        });
      }
    });
  }
}