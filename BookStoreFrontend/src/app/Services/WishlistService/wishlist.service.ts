import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  base=environment.baseurl;
  token: any;
  constructor(private httpService: HttpService) {this.token = localStorage.getItem('token'); }


  addToWishlist(reqData:any ,bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.postservice(this.base+'/add_wish_list/'+bookId, reqData, true, header);
  }






  addWishlist(reqData: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.postservice(this.base+'/add_wish_list/' + reqData.bookid,reqData,true,httpOption);
  }
}
