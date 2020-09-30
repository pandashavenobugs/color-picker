import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deneme(color:string){
    console.log(color);

  }
  title = 'color-picker';
  color='#2889e9';
}

