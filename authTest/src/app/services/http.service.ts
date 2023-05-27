import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { userData } from "../DataModels/users";

@Injectable({providedIn:'root'})
export class HttpService{
    constructor(private http:HttpClient){}

    post(data:{title:string, content:string}){
        this.http.post('https://course1-11786-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
        ,data
        ,{
          //headers:new HttpHeaders({'Costum Header': 'Hifrompost'}),
          observe:'body',
          responseType:'json'
          
        })
    .subscribe((d)=>{
      //console.log(d);
    });
    //console.log(data);
    }

    getAll(){
    let seacrhParams = new HttpParams();
        seacrhParams = seacrhParams.append('print','pretty');
        //it will return http...
    return this.http.get(
      'https://course1-11786-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      {
        //headers:new HttpHeaders('this is my comment'),
        //params: seacrhParams,
        //observe:'response'
      })
    .pipe(map((arr:userData[]) =>{
      const dataList = [];
      //const arrData=[];
      for(const i in arr){
        if(arr.hasOwnProperty(i)){
          dataList.push({ ...arr[i], id:i});
        }
      }
      return dataList;
    }))
    }

    deleteAll(){
       return this.http.delete('https://course1-11786-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
    }

}