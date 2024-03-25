import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public loginForm!: FormGroup;
  constructor(private route: Router, private auth: AuthService, private formBuilder: FormBuilder) { 

    this.loginForm = this.formBuilder.group({
        email: new FormControl(''),
        password: new FormControl('')
    })
    
  }

  ngOnInit() {}

  toRegister(){
    this.route.navigate(['/register']);
  }
  login(){
    this.auth.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).then((res)=>{
       this.route.navigateByUrl('/landing')
       console.log('success',res)
    }).catch((res)=>{
       console.log('error',res)
    })
  }
}
