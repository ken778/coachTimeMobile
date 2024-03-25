import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
 public regForm!: FormGroup;
  constructor(private route: Router,private formbuilder: FormBuilder, private auth: AuthService) { 
    this.regForm = this.formbuilder.group({
        email: new FormControl(''),
        password: new FormControl('')
    })
  }

  ngOnInit() {}

  toLogin(){
    this.route.navigate(['/login']);
  }

  register(){
     this.auth.register(this.regForm.get('email')?.value, this.regForm.get('password')?.value).then((res)=>{
       console.log('success',res)
     }).catch((error)=>{
        console.log('error',error)
     })
  }

}
