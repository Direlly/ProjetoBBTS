import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client-chat.component.html',
  styleUrls: ['./client-chat.component.css']
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
}