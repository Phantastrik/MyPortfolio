import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	@Input() title: string;
	@Input() date: number;
	@Input() content: string;
	realDate: Date;

	
 	constructor() { }

  	ngOnInit() {
  		this.realDate = new Date(this.date);
  	}

}
