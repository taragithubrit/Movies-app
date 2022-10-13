import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  mat0= "^[a-zA-Z]{1}[a-zA-Z0-9.\-]*@[a-zA-Z]{3}[a-zA-Z.-]*[a-zA-Z]{2}[.][a-zA-Z]{3,}$";
  mat1= "[a-zA-Z0-9/-]{8,16}";
  firstFormGroup: any;

  constructor( private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
    // let snackBarColor = this.snackBar.open(" Submitted successfully", "Okay!", {
      // duration: 5000,
      // // horizontalPosition: "center"
      // panelClass: ["snack-style"],
      // verticalPosition: "top",
      //  });

      //form validations for username and passward
    this.firstFormGroup = this._formBuilder.group({
     
      email: new FormControl('',[Validators.required,Validators.pattern(this.mat0)]),
      password: new FormControl('',[Validators.required,Validators.pattern(this.mat1)]),
     
});
  }

  login(): void {
    if(this.firstFormGroup.valid) {
      this.loginService.login(this.firstFormGroup.value)
      .pipe(
        catchError(err => {
          this.snackBar.open(err?.error.message)
          throw err;
        })
      )
      .subscribe((token) => {
        sessionStorage.setItem('accessToken', token);
        this.router.navigate(['/search'])
      })
    }
  }

}
