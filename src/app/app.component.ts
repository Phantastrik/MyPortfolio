import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlackSmokePF';
  	constructor() {
	 	const config = {
	    apiKey: "AIzaSyDxqo2TXUrjCN7ONmfmm0U_FWnP74Xqyaw",
	    authDomain: "mienportfolio.firebaseapp.com",
	    databaseURL: "https://mienportfolio.firebaseio.com",
	    projectId: "mienportfolio",
	    storageBucket: "mienportfolio.appspot.com",
	    messagingSenderId: "87504621137"
	  };
	  firebase.initializeApp(config);
	}
}

