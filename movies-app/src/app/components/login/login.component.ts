import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  mat0="^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{3}[a-zA-Z.-]*[a-zA-Z]{2}[.][a-zA-Z]{3,}$"
  mat1="[a-zA-Z0-9/- ]{8,16}"
  firstFormGroup: any;

  constructor( private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,) { }

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
      Password: new FormControl('',[Validators.required,Validators.pattern(this.mat1)]),
     

     
      

    });
  }

}
