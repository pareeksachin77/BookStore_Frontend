import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm! : FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      fullname:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      mobile:['',[Validators.required]]
    })
  }
 onsubmit(){
  this.submitted=true;
  if(this.signupForm.valid){
    let payload={
      fullName:this.signupForm.value.fullname,
      email:this.signupForm.value.email,
      password:this.signupForm.value.password,
      phone:this.signupForm.value.mobile
    }
    this.user.register(payload).subscribe((response:any)=>{
      console.log(response)

      //localStorage.setItem("token",response.data)
    })
  }

 }
}
