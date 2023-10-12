import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "../../../interfaces/product";
import { ProductService } from "../../../services/product.service";
import { Subscription } from 'rxjs';
import { AuthService } from "../../../services/login.service";


@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: string = '';
    sub!: Subscription;
    isLoggedIn = false;
    productId: number;
    canView: boolean = false;


    private _listFilter: string = '';
    
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        console.log('set list', value)
        this.filteredPrducts = this.performFilter(value);
    }

    filteredPrducts: IProduct[] = [];
    products: IProduct[] = [];

    constructor(private productService: ProductService, private authService: AuthService) {
        authService.CurentUser$.subscribe(user => {
            this.isLoggedIn=user
          });
    }


    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase()
        return this.products.filter((product: IProduct) =>
            product.productName.toLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredPrducts = this.products;
            },
            error: err => this.errorMessage = err
        });

    
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = ' Product List: ' + message;
    }


    onViewClick(id: number): void{
        this.canView = !this.canView;
        this.productId = id;
    }
    
}

