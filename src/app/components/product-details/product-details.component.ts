import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { productService } from 'src/app/product.service';
import { product } from 'src/app/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProductDetailsComponent implements OnInit {
  prod!:product;
  constructor(private productservice:productService,private  activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let productid = this.activatedRoute.snapshot.params['id'];
      console.log(productid);
     let p = this.productservice.getproduct(productid)!;
     this.prod = p;
    };
  }
  

