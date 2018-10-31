import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs/Subscription'; 
import {Post} from '../../models/post.model'; 

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	posts: Post[];
	postsSubscription: Subscription;

	constructor(private postService : PostService) {}

	ngOnInit() {
		this.onFetch();
	    this.postsSubscription = this.postService.postSubject.subscribe(
	      (posts: Post[]) => {
	        this.posts = posts;
	      }
	    );
	    this.postService.emitPosts();
	}

	onFetch(){
		this.postService.getPosts();
	}

}
