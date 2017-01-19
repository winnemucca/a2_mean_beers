import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
@Component({
    selector: 'app-logout'
})

export class LogoutComponent {

    constructor(private authService: AuthService, private router: Router) {}

}
