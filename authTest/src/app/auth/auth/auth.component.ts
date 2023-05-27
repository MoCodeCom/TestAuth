import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,catchError,pipe } from 'rxjs';
import { AuthRespons } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
isLoginMode:boolean = true;
isLoading:boolean = false;
errorHtml:string= null;

constructor(private authService:AuthRespons, private router:Router){}
onLogin(){
  this.isLoginMode = !this.isLoginMode;
  //this.authService.authResponse();
}

onSubmit(form: NgForm){
  let obser:Observable<any>;
  const emailForm = form.value.email;
  const passwordFrom = form.value.password;
  this.isLoading = true;
  if(!this.isLoginMode){
  obser = this.authService.login(emailForm, passwordFrom);
   /*
   .then(
    val => {console.log(val);
    this.router.navigateByUrl('home');
    })
   .catch(
    err =>{
      this.error = err.message;
      //this.error = 'there is an error occured!';
      console.log('there are error: '+ err);
    }
   );
   */
   

  }else{
    
  obser = this.authService.authResponse(emailForm, passwordFrom);
    /*
    .then(val =>{console.log(val);})
    .catch(
      err =>{
        this.error = err.message;
        //this.error = 'there is an error occured!';
        console.log('there are error: '+ err);
    })
    ;
    */
    /*
    this.authService.authResponse(emailForm, passwordFrom).subscribe((value)=>{
      console.log(value);
    },err =>{
      console.log('error is: '+ err.value);
    });*/

    this.isLoading = false;
  }

  obser.subscribe(
    data =>{
    this.router.navigateByUrl('home');
  },
  err =>{
    this.errorHtml = err.message;
    
  });

  form.reset();
  this.isLoading = false;
}


}
