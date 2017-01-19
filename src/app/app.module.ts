import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { routing } from './app.routing';

import { PostsService } from './posts.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing// Add routes to the app

  ],
  providers: [PostsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
