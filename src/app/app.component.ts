import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data={
    name:"Berhanu"
  };
  
//  @Input()
 // yourName:string;

  popMessage(){
    alert(' Hello, Welcome!!! ');
  }

  title = "Angular - Hello World - Page ";
}
