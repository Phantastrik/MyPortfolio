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
			this.posts.sort(
				(a:Post,b:Post) => {
					var aview = (a.nbView ? a.nbView : 0);
					var bview = (b.nbView ? b.nbView : 0);
					return bview - aview;
				} 
			)
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
 	   firebase.database().ref('/posts').set(this.posts);
  	}

  	getById(id : number){
  		const post = this.posts.find(
	        (s) => {
	           return s.id == id
	        }
		);
		return post;
  	}


}
