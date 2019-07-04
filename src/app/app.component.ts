import { Component } from '@angular/core';
import * as firebase from 'firebase';
import * as cfgFb from './firebase_maconf';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlackSmoke Portfolio';
  constructor(private meta: Meta,
              private htmltitle: Title) {
    const config = cfgFb.maConfigFirebase;
    firebase.initializeApp(config);
    this.meta.addTag({ name: 'description', content: 'Portfolio de Victor Ledoux, BlackSmoke, artiste amateur' });
    this.meta.addTag({ name: 'author', content: 'victor ledoux, BlackSmoke' });
    this.meta.addTag({ name: 'keywords', content: 'blacksmoke, portfolio, dessin, art, montage, affiche, victor, ledoux' });
    this.htmltitle.setTitle('BlackSmoke\'s Portfolio');
  }
}

