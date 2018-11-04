import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService : PostService,private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
  	console.log(form);
  	console.log(form.value);
  	const title = form.value['title'];
  	const content = form.value['content'];  
  	const imgPath = form.value['imgPath'];
  	const tags = form.value['tags'].toLowerCase().split(' ');  
  	const post = new Post();
  	const id = (this.postService.posts.length > 0 ) ? ( this.postService.posts[(this.postService.posts.length - 1)].id + 1) : 1;

  	post.title = title;
  	post.content = content;
  	post.date = new Date().getTime();
  	post.imgPath = imgPath;
  	post.tags = tags;
  	post.id = id;



  	console.log(post);

  	this.postService.addPost(post);
  	this.router.navigate(['posts']);
  }

}
