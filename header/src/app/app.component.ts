import { Component } from '@angular/core';
import * as singleSpa from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'header';
  
  mudarUrl(index: number){
    singleSpa.navigateToUrl('/');
  }

}
