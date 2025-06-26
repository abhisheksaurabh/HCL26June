import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowser } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports:[CommonModule,FormsModule],
  //standalone:true
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  private isLoggedInStatus = false;
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login().subscribe((res:any)=>{
      let i:number=0;
      let k = 0;
      while(i<res.length){
        if(this.username == res[i].userId && this.password == res[i].password){
          this.isLoggedInStatus = true;
          localStorage.setItem('token', 'dummy-token');
          k++;
          break;
        }
        i++;
      }
      if (k>0) {
        this.router.navigate(['/attendance']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    });
    
  }
    // login() {
    // this.authService.login().then((res:any)=>{
    //   let i:number=0;
    //   let k = 0;
    //   while(i<res.length){
    //     if(this.username == res[i].userId && this.password == res[i].password){
    //       this.isLoggedInStatus = true;
    //       localStorage.setItem('token', 'dummy-token');
    //       k++;
    //       break;
    //     }
    //     i++;
    //   }
    //   if (k>0) {
    //     this.router.navigate(['/attendance']);
    //   } else {
    //     this.errorMessage = 'Invalid username or password';
    //   }
    // });
    
  }
}
