import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'ngx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient) { }

  list: any[] = [];
  total: number;

  ngOnInit() {
    this.getList();
  }

  getList() {
    if (sessionStorage.getItem('cl-username') != null) {
      this.http.get("http://localhost:8080/carts/"
        + sessionStorage.getItem("cl-id")).subscribe((data: any) => {
          if (data.success) {
            this.list = data.result;
            console.log(this.list);
          }
          this.updateTotal();
        });
    }
  }

  xoa(item: any) {
    console.log(item);
  }
  giam(item: any) {
    item.quantity--;
    this.updateTotal();
  }
  tang(item: any) {
    item.quantity++;
    this.updateTotal();
  }
  updateTotal() {
    this.total = 0;
    this.list.forEach(x => {
      this.total += x.cartId.product.price * x.quantity;
    })
  }

}
