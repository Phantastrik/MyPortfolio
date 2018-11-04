import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Subscription } from 'rxjs/Subscription';


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

}
