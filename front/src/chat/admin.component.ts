import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.css']
})
export class AdminChatComponent implements OnInit {
  clientesConectados = [
    { id: 1, nome: 'Cliente 1', ultimaMensagem: 'Olá, preciso de ajuda' },
    { id: 2, nome: 'Cliente 2', ultimaMensagem: 'Como faço login?' }
  ];

  mensagens: string[] = [];
  mensagemAtual = '';

  constructor() {}

  ngOnInit(): void {}

  enviarMensagem() {
    if (this.mensagemAtual.trim()) {
      this.mensagens.push(`Você: ${this.mensagemAtual}`);
      this.mensagemAtual = '';
    }
  }
}