import { Injectable } from '@angular/core';
import { Albumlist } from '../model/album.model';
import { ALBUM_ITEMS } from '../data/albumlist-data';
import { findIndex } from 'lodash';

@Injectable()
export class AlbumlistService {
  private pItems = ALBUM_ITEMS;


  getProductsFromData():Albumlist[] {
    console.log(this.pItems);
    return this.pItems;
  }

  addProduct(product: Albumlist) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  updateProduct(product: Albumlist) {
    let index = findIndex(this.pItems, (p: Albumlist) => {
      return p.id === product.id;
    });
    this.pItems[index] = product;
  } 

  deleteProduct(product: Albumlist) {
    this.pItems.splice(this.pItems.indexOf(product), 1);
    console.log(this.pItems);
  }




}