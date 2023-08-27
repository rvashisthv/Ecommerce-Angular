import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private lf: FormBuilder,
    private service: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  loginForm = this.lf.group({
    email: [''],
    password: [''],
  });

  onLogin() {
    this.http.get<any>(`${environment.apiUrl}/users`).subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        alert('login sucessfull');
        this.loginForm.reset();
        this.router.navigate(['products']);
      }
    });
  }

  ngOnInit(): void {}
}
