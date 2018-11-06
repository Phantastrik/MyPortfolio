import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


	constructor(private filterService:FilterService,
				private router:Router) { }

	ngOnInit() {
	}

}
