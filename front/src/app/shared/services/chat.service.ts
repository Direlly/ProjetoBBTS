import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private messages: Subject<string> = new Subject<string>();

  constructor() {}

  enviar(mensagem: string) {
    // Aqui será integrado com WebSocket 
    this.messages.next(mensagem);
  }

  receber(): Observable<string> {
    return this.messages.asObservable();
  }
}