import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
bookList:any;
totalbooks:any;
  constructor(private book:BookService, private router: Router) { }

  ngOnInit(): void {
    this.getallbooks();
  }
getallbooks(){
  this.book.getallbooks().subscribe((response:any)=>{
    console.log(response);
    this.bookList=response.result;
    console.log(this.bookList)
  })
}
quickview(bookId:any){
  this.router.navigateByUrl("/dashboard/quickview2");
  localStorage.setItem('bookid',bookId);
  console.log(bookId);
}

}
