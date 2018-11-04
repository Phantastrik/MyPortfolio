import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
	{path : 'posts', component: PostListComponent},
	{path : 'posts/new', canActivate: [AuthGuardService], component: PostFormComponent},
	{path : 'posts/:id', component: SinglePostComponent},
	{path : 'auth', component: SigninComponent},
	{path : 'not-found', component: NotFoundComponent},
	{path : '', redirectTo : 'posts', pathMatch: 'full' },
	{path : '**', redirectTo : 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
