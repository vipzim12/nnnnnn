import { Component, OnInit, Input } from '@angular/core';
import { GroupCategoryService } from '../../../pages/service/group-category/group-category.service';
import { ProductService } from '../../../pages/service/product/product.service';

@Component({
  selector: 'ngx-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input() products: any;
  selectOption: string;
  gCategorys: any;
  isSelectCategory: boolean;
  constructor(private _groupCategoryService: GroupCategoryService, private _productService: ProductService) { }

  ngOnInit() {
    // this.getAllProduct();
    console.log(this.products);
  }
  getAllProduct() {
    this._productService.getAllProduct().subscribe((data: any) => {
      this.products = data.result;
      console.log(this.products);
    })

  }
}


