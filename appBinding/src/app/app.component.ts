import { Component, OnInit } from '@angular/core';
import SampleJson from '../assets/sampleJson.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor() {
    console.log('Reading local json files');
    console.log(SampleJson);
   }
   
   ngOnInit() {}

  title = 'appBinding';
  developer = 'Camilo Cartagena';
  urlImage = 'https://cdn.worldvectorlogo.com/logos/angular-3.svg'
  fullName: string = "Camilo";  

  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  isavailable = true;   //variable is set to true

  getColor(country) { (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

  onSave(){  
    console.log("Save operation is clicked!");  
  }  

}
