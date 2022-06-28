import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product';
import { productService } from 'src/app/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProductsComponent implements OnInit {
  products!:product[];
  constructor(private productservice:productService) { }

  ngOnInit(): void {
    this.products=this.productservice.getProducts();
   
  }
}
