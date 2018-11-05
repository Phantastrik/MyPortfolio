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
  @Input() imgPath:string;
  @Input() tags:string[];
  @Input() id:number;
	realDate: Date;
  fullPathImg:string;

 	constructor() { }

  	ngOnInit() {
  		this.realDate = new Date(this.date);
      if (!this.imgPath || this.imgPath==''){
        this.fullPathImg = 'assets/ressources/no_img.gif';
      }else{
        this.fullPathImg = 'assets/ressources/' + this.imgPath;
      }
     }

}
