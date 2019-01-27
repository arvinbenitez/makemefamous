import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  orders: any;

  ngOnInit() {
    this.apiService.orders().subscribe(x=> {
       this.orders = x;
    });
  }
}
