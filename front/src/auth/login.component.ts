import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.form.invalid) return;
    
    this.loading = true;
    this.auth.login(this.form.value.cpf, this.form.value.senha).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        const payload = JSON.parse(atob(res.token.split('.')[1]));
        if (payload.role === 'admin') {
          this.router.navigate(['/admin/chat']);
        } else {
          this.router.navigate(['/cliente/chat']);
        }
      },
      error: (err) => {
        this.loading = false;
        alert(err.message || 'Erro ao fazer login');
      },
      complete: () => this.loading = false
    });
  }
}

