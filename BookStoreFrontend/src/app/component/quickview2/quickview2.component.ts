import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { DataService } from 'src/app/Services/DataService/data.service';
import { FeedbackService } from 'src/app/Services/FeedbackService/feedback.service';
import { WishlistService } from 'src/app/Services/WishlistService/wishlist.service';

@Component({
  selector: 'app-quickview2',
  templateUrl: './quickview2.component.html',
  styleUrls: ['./quickview2.component.scss']
})
export class Quickview2Component implements OnInit {
  bookId = localStorage.getItem('bookId')
  Book: any;
  addedToCart:any=false;
  constructor(private dataservice:DataService,private bookservice:BookService,private feedback: FeedbackService,private cart: CartService,private wish:WishlistService) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId')
    this.dataservice.getbookdetails.subscribe((result: any) => {
      this.Book= result.result;
      console.log('data of quickview', this.Book);
    });
  }
  addToCart(){
    this.addedToCart=true;
    let reqData = {
      BookId: this.Book,
      BookInCart: 1
    }
    this.cart.addToCart(reqData,this.bookId).subscribe((response: any) => {
      console.log("Added to cart", response);
    });
  }
  addToWishlist(){
    let reqData = {
      BookId: this.Book.bookId,
    }
    this.wish.addToWishlist(reqData,this.bookId).subscribe((response: any) => {
      console.log("Added to wishlist", response);
    });

  }


}
