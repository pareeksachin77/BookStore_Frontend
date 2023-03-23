import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  base=environment.baseurl;
token:any;
  constructor(private httpservice:HttpService) { 
    this.token = localStorage.getItem('token');
  }

  addToCart(reqData: any,bookId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postservice(this.base+'/add_cart_item/'+bookId, reqData, true, header);
  }















  
  addcart(reqData: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };

    return this.httpservice.postservice(this.base+'/add_cart_item/'+reqData.bookid,reqData,true,httpOption);
  }
  quantity(bookid:any,reqData:any){
    let httpOption ={
      headers : new HttpHeaders ({
        'Content-type':'application/json',
        'x-access-token':this.token
      })
    }
    return this.httpservice.putservice(this.base+'/cart_item_quantity/'+bookid,reqData, true ,httpOption)

  }
 }
