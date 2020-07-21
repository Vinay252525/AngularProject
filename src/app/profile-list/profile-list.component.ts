import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {YService} from '../y.service';
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  public search;
  public users;
  public userFlag=false;
  constructor(private userservice:YService) { }

  ngOnInit(): void {
  }
  highToLow()
  {

     this.userservice.searchUser1(this.search,false).subscribe(
       data=>this.users=data,error=>console.log(error)
       
     )
     this.userFlag=true;
  }

  lowToHigh()
  {
    
     this.userservice.searchUser1(this.search,true).subscribe(
       data=>this.users=data,error=>console.log(error)
     )
     this.userFlag=true;
  }

}