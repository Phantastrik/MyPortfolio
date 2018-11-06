import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Subscription } from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent implements OnInit {

	mainTags = [
		{
			value : "affiche",
			active: false
		},
		{
			value : "dessin",
			active: false
		},
		{
			value : "inktober",
			active: false
		},
		{
			value : "montage",
			active: false
		},
		{
			value : "aventure stellaire",
			active: false
		}
	]

	activeFilters:string[] = []; 

	filterSubscription:Subscription;

	constructor(private filterService:FilterService) { }

	ngOnInit() {

		this.filterSubscription = this.filterService.filterSubject.subscribe(
			(filters:string[]) => {
				for (var i=0;i<this.mainTags.length; i++) {
					this.mainTags[i].active = this.filterService.isFilter(this.mainTags[i].value);
				}
				this.activeFilters = filters;
			}
		);
	}


	onSelectTag(index:number){
		this.filterService.addFilter(this.mainTags[index].value);
	}
	onRemoveFilter(index:number){
		this.filterService.removeFilter(this.mainTags[index].value);
	}
	onRemoveByTag(tag:string){
		this.filterService.removeFilter(tag);
	}

	onSubmitFilters(form: NgForm){
		const search = form.value['search'];

		var filters = search.split(',');

		for(var i =0; i<filters.length;i++){
			this.filterService.addFilter(filters[i]);
		}		
		form.reset();
	}
	onClearFilters(){
		this.filterService.clearFilters();
	}

}
