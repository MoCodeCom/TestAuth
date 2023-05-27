import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { userData } from '../DataModels/users';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
dataList=[];
loadingUserData:boolean = false;
error = null;
errorHandel = false;
isLoading:boolean = false;

constructor(
     private http:HttpClient,
     private httpService:HttpService){}
  ngOnInit(): void {
    this.isLoading = true;
    this.onGetAll();
  }

  onGetAll(){
    
    this.loadingUserData = true;
    this.httpService.getAll().subscribe((data)=>{
      //bring data form service as return as http...
      this.dataList = data;
      this.loadingUserData = false;
    },err =>{
      //console.log(err.error.error);
      this.error = err.error.error;
    });

    this.isLoading = false;
    //this.http.get('https://course1-11786-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    //.pipe(map((arr:userData[]) =>{
      //const arrData=[];
    //  for(const i in arr){
    //    if(arr.hasOwnProperty(i)){
    //      this.dataList.push({ ...arr[i], id:i});
    //    }
    //  }
      //return arrData;
    //})).subscribe((d)=>{
      /*
      for(const i in d){
        this.dataList.push({ ...d[i], id:i })
      }*/
      //to stop using loading ...
      //this.loadingUserData = false;
    //});
  }

  OnDeleteAll(){
    this.httpService.deleteAll().subscribe(()=>{
      this.dataList = [];
      this.errorHandel = true;
    });
  }

  OnErrorHandle(){
    this.error = null;
  }

}
