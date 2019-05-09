import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appBinding';
  developer = 'Camilo Cartagena';
  urlImage = 'https://cdn.worldvectorlogo.com/logos/angular-3.svg'
  fullName: string = "Camilo";  

  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  isavailable = true;   //variable is set to true

  onSave(){  
    console.log("Save operation is clicked!");  
  }  

}
