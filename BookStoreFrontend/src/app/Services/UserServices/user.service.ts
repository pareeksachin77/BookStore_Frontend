import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseurl;

  constructor(private http:HttpService) { }
  register(reqdata:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.http.postservice(this.base+'/registration',reqdata,false,header)
  }
  login(reqdata:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.http.postservice(this.base+'/login',reqdata,false,header)
  }
}
