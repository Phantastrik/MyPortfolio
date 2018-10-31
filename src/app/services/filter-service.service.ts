import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

	filters:string[];
	filterSubject = new Subject<string[]>();

	constructor() { }



	emitPosts(){
		this.filterSubject.next(this.filters);
	}


	setFilters(filters: string){
		this.filters = filters.split('');
		console.log("Filtres : ");
		console.log(this.filters);
	}

	clearFilters(){
		this.filters = []	
	}

	isValidByTab(fil:string[]){
		var ok = false;
		for(var i = 0;i<this.filters.length && ok == false;i++){
			ok = fil.indexOf(this.filters[i]) >= 0;
		}
		return ok;
	}

}
