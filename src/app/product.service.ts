import { Injectable } from '@angular/core';
import { product } from './product';
@Injectable({
  providedIn: 'root'
})
export class productService {

    constructor() { }
  

 public getProducts(){
   let products : product[]
   products=[
    new product(1,'Iphone 11',499,"https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_UY218_.jpg","Just One Kidney"),
    new product(2,'Iphone 12',699,"https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg","Just One big Kidney"),
    new product(3,'Iphone 13',899,"https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY218_.jpg","Just Two kidneys"),
   ]

  return products;
 } 

 public getproduct(id:any){
    let products = this.getProducts();
    return products.find(p=>p.productid==id)
 }
}
  