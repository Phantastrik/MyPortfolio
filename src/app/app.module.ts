import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './posts/post/post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './services/post.service';
import { HeaderComponent } from './header/header.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterService } from './services/filter.service';
import { TaglistComponent } from './taglist/taglist.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    HeaderComponent,
    PostFormComponent,
    SinglePostComponent,
    NotFoundComponent,
    TaglistComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PostService,
    FilterService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
