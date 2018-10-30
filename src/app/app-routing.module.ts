import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';

const routes: Routes = [
	{path : 'posts', component: PostListComponent},
	{path : 'posts/new', component: PostFormComponent},
	{path : '', redirectTo : 'posts', pathMatch: 'full' },
	{path : '**', redirectTo : 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
