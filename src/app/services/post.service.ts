import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {

	posts: Post[];
	postSubject = new Subject<Post[]>();

	constructor() {
		// this.getPosts();
		this.getSomePosts(10);
	}

	emitPosts() {
		this.postSubject.next(this.posts);
	}

	getSomePosts(number: number) {
		firebase.database().ref('/posts').limitToLast(number)
	    .on('value', (data: DataSnapshot) => {
			let dataGet = data.val() ? data.val() : {};
			let keys = Object.keys(dataGet);
			this.posts = [];
			keys.forEach(element => {
				this.posts.push(dataGet[element]);
			});
			this.emitPosts();
	        }
	    );
	}

	getPosts() {
	    firebase.database().ref('/posts')
	    .on('value', (data: DataSnapshot) => {
			console.log('getting all posts');
			console.log();
			this.posts = data.val() ? data.val() : [];
			this.emitPosts();
			console.log(this.posts);
	        }
	    );
  	}
  	getById(id: number) {
  		const post = this.posts.find(
	        (s) => {
	           return s.id == id;
	        }
		);
		return post;
  	}


}
