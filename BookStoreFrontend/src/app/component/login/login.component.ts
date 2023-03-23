import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup
submitted=false;
  constructor(private fb:FormBuilder, private user:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onsubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      let payload={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
        service:"advance",
      }
      this.user.login(payload).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem("token",response.data);
        this.router.navigateByUrl('dashboard/getallbooks')
      })
    }

  }

}
