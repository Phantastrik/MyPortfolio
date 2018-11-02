import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs/Subscription'; 
import {Post} from '../../models/post.model'; 
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

	posts: Post[];
	postsSubscription: Subscription;

	displayablePosts : Post[] = [];

	filterSubscription: Subscription;	

	constructor(private postService : PostService,
				private filterService:FilterService) {}

	ngOnInit() {
		this.onFetch();
	    this.postsSubscription = this.postService.postSubject.subscribe(
	      (posts: Post[]) => {
	        this.posts = posts;
	        this.displayablePosts = this.displayables(posts);
	      }
	    );

	    this.postService.emitPosts();

	    this.filterSubscription = this.filterService.filterSubject.subscribe(
	        (filter: string[]) => {
	        	this.displayablePosts = this.displayables(this.posts);	        	
		});
      	this.filterService.emitPosts();
   	}

    ngOnDestroy(){
      this.filterSubscription.unsubscribe();
      this.postsSubscription.unsubscribe();
    }

	onFetch(){
		this.postService.getPosts();
	}

	displayables(posts:Post[]){
		var res = [];
		if (this.posts){
			for(var i = 0; i<this.posts.length; i++){
	    		if(this.filterService.isValidByTab(this.posts[i].tags)){
	    			res.push(this.posts[i]);
	    		}	
	    	}	
		}
    	return res;
	}

}
