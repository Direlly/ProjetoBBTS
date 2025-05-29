import { Component, OnInit } from '@angular/core';
import { StatusService } from '../shared/services/status.service';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientChatComponent implements OnInit {
  adminOnline = false;

  constructor(private adminStatus: StatusService) {}

  ngOnInit(): void {
    this.adminStatus.isAdminOnline().subscribe({
      next: (res) => this.adminOnline = res.online,
      error: () => this.adminOnline = false
    });
  }
  whatsappLink = 'https://wa.me/55SEUNUMERO?text=Olá,%20preciso%20de%20ajuda';
}