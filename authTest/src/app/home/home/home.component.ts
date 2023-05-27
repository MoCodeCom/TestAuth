import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(
      private http:HttpClient, 
      private router:Router,
      private httpService:HttpService){}

  reportPg(){
    this.router.navigate(['/report']);
  }

  onSubmitForm(data: NgForm){
    console.log(data.value);
    const d = {title:data.value['title'], content:data.value['content']};
    this.httpService.post(d);
    //console.log(d);
    //const objData:{title:string, content:string} = {data.title, data.content};
    //this.http.post('https://course1-11786-default-rtdb.europe-west1.firebasedatabase.app/posts.json', d)
    //.subscribe((d)=>{
    //  console.log(d);
    //});
    //console.log(data);
    data.reset(data);
  }
}
