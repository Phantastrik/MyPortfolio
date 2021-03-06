import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

	post: Post;
	id: number;
	realDate: Date;
	fullPathImg: string;
	nextId: number;

	constructor(private postService: PostService,
				private route: ActivatedRoute,
				private router: Router) { }

	ngOnInit() {
		try {
			// tslint:disable-next-line:radix
			const id = parseInt(this.route.snapshot.params['id']);	
			this.post = this.postService.getById(id);
			this.realDate = new Date(this.post.date); 

			if (!this.post.photo || this.post.photo == '' ) {
		    	this.fullPathImg = 'assets/ressources/no_img.gif';
		  	} else {
		    	this.fullPathImg = this.post.photo;
  			}
  		  			
			
			this.nextId = -1;
			var nextPost = this.postService.getById(this.id++); 
			if (nextPost) {
				this.nextId = nextPost.id;	
			}
  			

		 } catch (e) {
			// console.log(e.getMessage());
			this.router.navigate(['not-found']);
		}
	}

}
