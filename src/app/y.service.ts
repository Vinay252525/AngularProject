import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class YService {
  private _url:string="https://api.github.com/search/users?q=";
  constructor(private http:HttpClient) { }
  searchUser1(value:string, direc:boolean){
    if(direc==true)
    return this.http.get(this._url+value+"&sort=order&direction=desc");

    return this.http.get(this._url+value+"&sort=order&direction=asc");
  }
}