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
	postNumber = 10;
	restrictedContent = true;

	displayablePosts: Post[] = [];

	filterSubscription: Subscription;
	tri: string;

	constructor(private postService: PostService,
				private filterService: FilterService) {}

	ngOnInit() {
		this.restrictedContent = true;
		this.tri = 'dat';
		this.onFetch();
		this.postsSubscription = this.postService.postSubject.subscribe(
			(posts: Post[]) => {
			this.posts = posts;

			this.displayablePosts = this.displayables(posts);
			this.sortDisplayables();
			}
		);

		this.postService.emitPosts();

		this.filterSubscription = this.filterService.filterSubject.subscribe(
			(filter: string[]) => {
				if (filter.length > 0) {
					this.onFetchAll();
					console.log('fetch all');
				} else {
					this.onFetch();
					console.log('fetch some');
				}
				this.displayablePosts = this.displayables(this.posts);
				this.sortDisplayables();
		});
		this.filterService.emitPosts();
	}

	ngOnDestroy() {
		this.filterSubscription.unsubscribe();
		this.postsSubscription.unsubscribe();
	}

	onFetch() {
		this.restrictedContent = true;
		this.postService.getSomePosts(this.postNumber);
	}
	onFetchAll() {
		this.restrictedContent = false;
		console.log('post-list fetchall');
		this.postService.getPosts();
	}

	displayables(posts: Post[]) {
		let res = [];
		if (this.posts) {
			for ( var i = 0; i < this.posts.length; i++) {
				if (this.filterService.isValidByTab(this.posts[i].tags)) {
					res.push(this.posts[i]);
				}
			}
		}
		return res;
	}
	sortDisplayables() {
		if (this.tri == 'pop') {
			this.displayablePosts.sort(
				(a: Post, b: Post) => {
					var aview = (a.nbView ? a.nbView : 0);
					var bview = (b.nbView ? b.nbView : 0);
					return bview - aview;
				}
			);
		} else if (this.tri == 'dat') {
			this.displayablePosts.sort(
				(a: Post, b: Post) => {
					var adat = (a.date ? a.date : 0);
					var bdat = (b.date ? b.date : 0);
					return bdat - adat;
				}
			);
		} else if (this.tri == 'dat-') {
			this.displayablePosts.sort(
				(a: Post, b: Post) => {
					var adat = (a.date ? a.date : 0);
					var bdat = (b.date ? b.date : 0);
					return adat - bdat;
				}
			);
		} else if (this.tri == 'tit') {
			this.displayablePosts.sort(
				(a: Post, b: Post) => {
					return a.title.localeCompare(b.title);
				}
			);
		} else {
			this.displayablePosts.sort(
				(a: Post, b: Post) => {
					var aid = (a.id ? a.id : 0);
					var bid = (b.id ? b.id : 0);
					return aid - bid;
				}
			);
		}
	}
	changeTri(tri) {
		this.tri = tri;
		this.sortDisplayables();

	}

}
