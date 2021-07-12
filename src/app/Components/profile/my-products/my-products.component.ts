import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  
  constructor(private myProductService:ProductService, private router: Router) { 
  }
  product:any;
  ngOnInit(): void {
    this.getProductOfUser()
  }
  getProductOfUser(){
    this.myProductService.SearchBUserEmail('lala@yahoo.com').subscribe(
      (res:any)=>{this.product=res},
      (err)=>{console.log(err)},
    );
  }
 async DeleteProduct(id:any){
  let data =  await this.myProductService.DeleteProduct(id).subscribe(
    (res:any)=>{console.log(res)
    },
    (err)=>{console.log(err)},
  );
  this.router.navigateByUrl('/profile/profile/addNewProduct')
}
}