import { Component, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import {environment} from './../environments/environment';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlackSmoke Portfolio';
  constructor(private metaService: Meta,
              private titleService: Title,
              public el: ElementRef) {
    const config = environment.configFirebase;
    firebase.initializeApp(config);
    this.metaService.addTag({ name: 'description', content: 'Portfolio de Victor Ledoux, BlackSmoke, artiste amateur' });
    this.metaService.addTag({ name: 'author', content: 'victor ledoux, BlackSmoke' });
    this.metaService.addTag({ name: 'keywords', content: 'blacksmoke, portfolio, dessin, art, montage, affiche, victor, ledoux' });
    this.titleService.setTitle('BlackSmoke\'s Portfolio');
  }
 
}

