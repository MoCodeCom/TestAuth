import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModule } from './modules/user.modules';
import { AuthRespons } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'authTest';
  isAuthenticate = false;
  private userSub: Subscription;

  constructor(private authService:AuthRespons){}
  
  ngOnInit(): void {
    const checkLogin = this.authService.userSubject.subscribe(
      data => {
        if(data){
          this.isAuthenticate = true;
        }
      }
    );

    if(this.authService.autoLogin()){
      this.isAuthenticate = true;
    }
    
  }

  onLogout(){
    this.authService.logout();
    this.authService.autoLogout();
    this.isAuthenticate = false;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }


}
