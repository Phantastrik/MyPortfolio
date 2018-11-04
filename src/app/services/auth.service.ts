import { Injectable } from '@angular/core';
import * as firebase from 'firebase';



@Injectable()
export class AuthService {

	isAuth = false;
	constructor() { }

	createNewUser(email:string, password:string){
		return new Promise(
			(resolve,reject) => {
				firebase.auth().createUserWithEmailAndPassword(email, password).then(
					() => {
						resolve();
					},
					(error) => {
						reject(error);
					}
				)
			}
		);
	}

	signInUser(email:string, password:string){
		return new Promise(
			(resolve,reject) => {
				firebase.auth().signInWithEmailAndPassword(email, password).then(
					() => {
						this.isAuth = false;
						resolve();
					},
					(error) => {
						reject(error);
					}
				)
			}
		);
	}

	signOutUser(){
		firebase.auth().signOut();
	}
}
