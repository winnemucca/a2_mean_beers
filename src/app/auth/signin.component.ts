import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthService } from './auth.service';

@Component ({
    selector: 'app-signin'
})

export class SignInComponent {
    myForm: FormGroup;
    constructor(private authService: AuthService, private router: Router) {}

}
