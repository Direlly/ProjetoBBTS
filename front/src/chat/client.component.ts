import { Component, OnInit } from '@angular/core';
import { AdminStatusService } from '../services/status.service';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client-chat.component.html',
  styleUrls: ['./client-chat.component.css']
})
export class ClientChatComponent implements OnInit {
  adminOnline = false;

  constructor(private adminStatus: AdminStatusService) {}

  ngOnInit(): void {
    this.adminStatus.isAdminOnline().subscribe({
      next: (res) => this.adminOnline = res.online,
      error: () => this.adminOnline = false
    });
  }
}