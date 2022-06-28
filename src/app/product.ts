export class product{
    constructor(ProductId:number,name:string,price:number,url:string,description:string){
        this.productid = ProductId;
        this.name = name;
        this.price = price;
        this.url=url;
        this.description=description;
    }
    productid:number;
    name:string;
    price:number;
    url:string;
    description:string;
}