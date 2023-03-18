import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
  postservice(url:any,data:any,token:boolean=false,option:any){
    return this.httpclient.post(url,data,token && option)
  }
  
}
