import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../view-product/Product';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  searchProduct(id: number){
    console.log(id);
    //this.router.navigate(['details', id]);

  }
  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.productService.fetchAllProduct()
    .subscribe((res:any)=>
      {
        console.log(res)
        this.productService.products = res;

      })
  }
  deleteProduct(index: number){
    this.productService.deleteProduct(index)
     .subscribe(res => console.log(res))
  alert("successfully deleted");
    }
}
