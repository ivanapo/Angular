import { Component, Input } from '@angular/core';
import { IProduct } from "../../../interfaces/product";
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'products-more',
  templateUrl: './products-more.component.html',
  styleUrls: ['./products-more.component.css']
})
export class ProductsMoreComponent {


  constructor(private productService: ProductService) { }


  @Input() products: IProduct[];
  @Input() idNumber: number

  product: IProduct;


  imageWidth: number = 50;
  imageMargin: number = 2;

  ngOnInit(): void {

    this.productService.getProduct(this.idNumber).subscribe({
      next: product => {
        this.product = product;
        console.log(product);
      },
      error: err => console.log(err)
    });
  }
}



