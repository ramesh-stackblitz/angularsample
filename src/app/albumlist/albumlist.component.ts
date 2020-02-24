import { Component, OnInit } from '@angular/core';
import { AlbumlistService } from './albumlist.service';
import { Albumlist } from '../model/album.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.scss']
})
export class AlbumlistComponent implements OnInit {

  products: Albumlist[];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};
  imageUrl: any;
  isAdminFlag: boolean;
  isUserFlag: boolean;
  filterOption: string = 'all';
  searchValue: string = '';
  filterItems: any = [];
  

  constructor(private productService: AlbumlistService, private activatedRoute: ActivatedRoute) { 
    this.getProducts();
    this.updateResults();
    
  }
  
  ngOnInit() {
    //this.getProducts();
    //this.updateResults();
  }

  getProducts() {
    this.products = this.productService.getProductsFromData();
    this.isAdminFlag = this.activatedRoute.snapshot.params.isAdminFlag;
    this.isUserFlag = this.activatedRoute.snapshot.params.isUserFlag;
  } 

  async updateResults() {
    this.filterItems = this.searchByValue(this.products);
  }

  searchByValue(items) {
    return items.filter(item => {
      if (this.searchValue.trim() === '') {
        return true;
      } else {
        return item.titleName.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) || 
               item.albumName.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) ||
               item.composerName.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) ||
               item.artistName.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    })
  }

  // filterByOption(items) {
  //   return items.filter(item => {
  //     if (this.filterOption === 'all') {
  //       return true;
  //     } 
  //   })
  // }

  showEditProductForm(product: Albumlist) {
    if(!product) {
      this.productForm = false;
      return; 
    }
    this.editProductForm = true;
    this.editedProduct = Object.assign(product);
  }

  showAddProductForm() {
    // resets form if edited product
    if(this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  saveProduct(product: Albumlist) {
    if(this.isNewForm) {
      // add new product
      this.productService.addProduct(product);
    } 
    this.productForm = false;
  }

  updateProduct() {
    this.productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  removeProduct(product: Albumlist) {
    this.productService.deleteProduct(product);
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      
      // reader.onload = (event) => { // called once readAsDataURL is completed
      //  // this.imageUrl = event.target.result;
      // }
      reader.onload = (event) => {
        //this.imageUrl.emit((event.target as FileReader).result);
        this.imageUrl = event.target["result"];
    }
    }
  }

}
