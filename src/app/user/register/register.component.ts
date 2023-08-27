import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  regForm = this.fb.group({
    fname: ['', [Validators.required]],
    lname: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    cpassword: ['', Validators.required],
  });

  get cpassctrl(): FormControl {
    return this.regForm.get('cpassword') as FormControl;
  }
  get emailctrl(): FormControl {
    return this.regForm.get('email') as FormControl;
  }
  get passctrl(): FormControl {
    return this.regForm.get('password') as FormControl;
  }
  get fnamectrl(): FormControl {
    return this.regForm.get('fname') as FormControl;
  }
  onSubmit() {
    console.log(this.regForm.value);
    const { fname, lname, email, password } = this.regForm.value; //object destructuring

    this.service
      .addUser(fname, lname, email, password)
      .subscribe((data) => console.log('added User'));
    this.router.navigate(['users']);
  }
}
