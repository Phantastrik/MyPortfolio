import { Component } from '@angular/core';
import * as firebase from 'firebase';
import * as cfgFb from './firebase_maconf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlackSmoke Portfolio';
  	constructor() {
	 	const config = cfgFb.maConfigFirebase;
	  firebase.initializeApp(config);
	}
}

