import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  // email: string;
  // password: string;

  login(email, password){
    this.authService.login(email, password).subscribe(
      data => {
        if(data.token !== null){
          this.authService.setToken(data.token);
          this.router.navigate(['/home']);
        }
      }
    )
  }

}
