import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

	filters:string[] = [];
	filterSubject = new Subject<string[]>();

	constructor() { }



	emitPosts(){
		this.filterSubject.next(this.filters);
	}


	setFilters(filters: string){
		if (filters == ""){
			this.filters = [];
		}else{
			this.filters = filters.split(' ');
		}
		for (var i = 0; i<this.filters.length; i++) {
			this.filters[i] = this.filters[i].toLowerCase();
		}
		console.log(this.filters);
		this.emitPosts();
	}

	clearFilters(){
		this.filters = [];
		console.log(this.filters);
		this.emitPosts();
	}

	isValidByTab(fil:string[]){
		var ok;
		if (this.filters.length == 0){
			ok = true;
		}else{
			ok = false;
		}
		 
		for(var i = 0;i<this.filters.length && ok == false;i++){
			ok = fil.indexOf(this.filters[i]) >= 0;
		}
		return ok;
	}
	addFilter(filter:string){
		if(this.filters.indexOf(filter.toLowerCase()) < 0){
			this.filters.push(filter.toLowerCase());
		}
		this.emitPosts();
	}

	removeFilter(filter:string){
		var i = this.filters.indexOf(filter); 
		if( i >= 0){
			this.filters.splice(i,1);
		}
		this.emitPosts();
	}
	isFilter(filter:string){
		return (this.filters.indexOf(filter) >= 0);
	}

}
