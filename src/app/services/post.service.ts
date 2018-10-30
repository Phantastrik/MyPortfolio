import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {

	posts : Post[];
	postSubject = new Subject<Post[]>();

	constructor() {
		this.getPosts()
	}

	emitPosts(){
		this.postSubject.next(this.posts);
	}

	getPosts() {
	    firebase.database().ref('/posts')
	    .on('value', (data: DataSnapshot) => {
			this.posts = data.val() ? data.val() : [];
			this.emitPosts();
	        }
	    )
  	}
  	addPost(post: Post) {
		this.posts.push(post);
		this.savePosts();
		this.emitPosts();
  	}

  	savePosts(){
  		console.log("just bef sending to firebase");
  		console.log(this.posts);
 	   firebase.database().ref('/posts').set(this.posts);
  	}


}
