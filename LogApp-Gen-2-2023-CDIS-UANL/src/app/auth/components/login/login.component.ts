import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  
  formularioLog: FormGroup = this.fb.group({

      id: ['', [Validators.required, Validators.minLength(8)]],
      pass: ['',[Validators.required, Validators.minLength(7)]]
  });


  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService, 
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    
  }
  
  login(){
    /*
    console.log(this.formularioLog.value);
    console.log(this.formularioLog.valid);
    this.router.navigateByUrl("/dashboard");*/

    if(this.formularioLog.valid){
        const {id, pass}= this.formularioLog.value
        console.log(id)
        console.log(pass)
        this.authService.login(id, pass).subscribe(res =>{
          if(res === true){
            this.router.navigateByUrl("/dashboard");
            this.toastr.success(id,'Ingreso correctamente');
          }else{
            console.log(this.formularioLog.value)
            console.log(res);
            this.toastr.error(res,'Error',{
              timeOut: 400,
              progressAnimation: 'increasing'
            })
          }
        })
    }else{
      this.toastr.error('Verifique sus datos', 'Error');
      

    }
  
  }
}
