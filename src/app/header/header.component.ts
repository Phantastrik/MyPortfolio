import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isAuth:boolean;

	constructor(private filterService:FilterService,
				private router:Router,
				private authService:AuthService) { }

	ngOnInit() {
		this.isAuth = this.authService.isAuth;
	}

	onSubmitFilters(form: NgForm){
		const search = form.value['search'];

		var filters = search.split(' ');

		for(var i =0; i<filters.length;i++){
			this.filterService.addFilter(filters[i]);
		}		
		this.router.navigate(['posts']);
	}

	clearFilters(){
		console.log("clear");
		this.filterService.clearFilters();
	}

}
