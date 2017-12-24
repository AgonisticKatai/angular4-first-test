import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  hobbies: string[];
  showHobbies: boolean;

  constructor () {
    this.name = 'Nacho';
    this.email = 'nachotorrella@gmail.com';
    this.hobbies = ['eat', 'sleep', 'eat'];
    this.showHobbies = false;
  }

  toggleHobbies = () => {
    this.showHobbies = !this.showHobbies;
  }

  addHobby = (newHobby) => {
    this.hobbies = [...this.hobbies, newHobby.value];
    newHobby.value = '';
    return false;
  }
}
