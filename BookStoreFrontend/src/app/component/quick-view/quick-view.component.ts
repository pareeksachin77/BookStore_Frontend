import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { DataService } from 'src/app/Services/DataService/data.service';
import { WishlistService } from 'src/app/Services/WishlistService/wishlist.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  bookId = localStorage.getItem('bookId')
  book:any;
  constructor(private bookservice:BookService,private dataservice:DataService,private wishservice:WishlistService,private cartservice:CartService) { }
  Book: any;
  increase: any;
  decrease: any;
  addBag: boolean = false;
  count = true;
  item_qty: any;

  ngOnInit(): void {
    this.dataservice.getbookdetails.subscribe((result: any) => {
      this.Book= result;
      console.log('data of quickview', this.Book);
    });
    
  }
  addCarts() {
    let reqData = {
      bookid: this.Book._id,
    };
    console.log(reqData);
    console.log('bookId ', this.Book._id);
    this.cartservice.addcart(reqData).subscribe((result: any) => {
      console.log('add APi is called ', result);
      this.addBag = true;
      this.count = false;
    });
  }
  addwishlistBook() {
    let reqData = {
      bookid: this.Book._id,
    };
    console.log(reqData);
    console.log('bookId', this.Book._id);
    this.wishservice.addWishlist(reqData).subscribe((response: any) => {
      console.log('Addwishlist API is Called ', response);
    });
    // this.snackbar.open('Book Added to Wishlist', '', {
    //   duration: 2000,
    //   verticalPosition: 'bottom',
    // });
  }

  hideshow() {
    this.addBag = true;
    this.count = false;
  }

  increment() {
    this.increase++;
  }
  decrement() {
    this.decrease--;
  }

  increments(Book: any) {
    this.item_qty = Book.quantity;
    this.item_qty += 1;
    console.log('increase book quantity ', this.item_qty);
    this.updateCount(Book);
  }

  decrements(Book: any) {
    this.item_qty = Book.quantity;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
    }
    console.log('decreased book quantity', this.item_qty);
    this.updateCount(Book);
  }
  updateCount(Book: any) {
    this.item_qty = Book.quantity;
    this.item_qty += 1;
    console.log('quantity of new', this.item_qty);
    console.log('Quantity of exstings', Book.quantity);
    console.log('Update book Api before Called');
    let reqData = {
      quantity: this.item_qty,
    };
    this.cartservice.quantity(Book._id, reqData).subscribe((response: any) => {
      console.log('UpdateBook API is called', response);
    });
  }

}
