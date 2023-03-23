import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  base=environment.baseurl;
token:any;
  constructor(private http:HttpService) { 
    this.token=localStorage.getItem('token');
  }
  getallbooks(){
    let header = {
      headers: new HttpHeaders({
      
        'Content-Type' : 'application/json' ,
        //'Authorization' :'Bearer '+this.token 
      })
    }
      
      return this.http.getservices(this.base+'/get/book',true,header)
    }
   
  }

