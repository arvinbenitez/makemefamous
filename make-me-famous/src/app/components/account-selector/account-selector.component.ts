import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.css']
})
export class AccountSelectorComponent implements OnInit {

  accounts: any;
  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.accounts().subscribe(x=> {
        this.accounts = x;
        console.log('I have some accounts ', this.accounts);
    });
  }

  select(account: any): void {
     this.apiService.startSession(account.id).subscribe(x=> {
        this.authService.setAccount(account.name, account.id);
        window.location.href = "/";
     });
  }
}
