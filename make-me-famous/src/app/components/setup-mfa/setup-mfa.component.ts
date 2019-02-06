import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-setup-mfa',
  templateUrl: './setup-mfa.component.html',
  styleUrls: ['./setup-mfa.component.css']
})
export class SetupMfaComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  name: string;
  password: string;
  qrCode:string;
  mfaRegistered: boolean;
  qrCodeUrl: string;
  ngOnInit() {
  }

  enableMFA(username, password, token): void {
    this.name = username;
    this.password = password;
    this.apiService.enableMfa({
      "username": username,
      "password": password,
      "token": token
    }).subscribe(x=> {
      if (this.qrCode && token) {
        this.mfaRegistered = true;
      }
      this.qrCode = x.text();
      this.qrCodeUrl = this.apiService.qrCodeUrl(this.qrCode);
    })
  }



}
