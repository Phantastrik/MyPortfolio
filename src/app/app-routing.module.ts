import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{path : 'posts', component: PostListComponent},
	{path : 'posts/:id', component: SinglePostComponent},
	{path : 'not-found', component: NotFoundComponent},
	{path : '', redirectTo : 'posts', pathMatch: 'full' },
	{path : '**', redirectTo : 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
