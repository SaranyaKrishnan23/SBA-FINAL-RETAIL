import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  addProduct(
    id:number,
    name:String,
    price: DoubleRange, 
    category: string,
    type:string, 
    expiry_date:Date){
      
    this.productService.addProduct({id:null,name,price,category,type,expiry_date})
    .subscribe(res=>console.log(res))
  }

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

}
