import { Component, OnInit } from '@angular/core';

import { myproducts } from '../myproducts';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 
  myproducts = myproducts;
  constructor() { }
  
  shareW(){
    window.alert('The product has been shared on Whatsapp!')
  }
  shareT(){
    window.alert('The product has been shared on Telegram!')
  }
  ngOnInit(): void {
  }

}
