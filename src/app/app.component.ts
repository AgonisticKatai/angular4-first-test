import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  name: string;
  email: string;
  hobbies: string[];
  showHobbies: boolean;
  posts: Ipost[];

  constructor (private postService: PostService) {
    this.name = 'Nacho';
    this.email = 'nachotorrella@gmail.com';
    this.hobbies = ['eat', 'sleep', 'eat'];
    this.showHobbies = false;
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies = () => {
    this.showHobbies = !this.showHobbies;
  }

  addHobby = newHobby => {
    this.hobbies = [...this.hobbies, newHobby.value];
    newHobby.value = '';
    return false;
  }
}

interface Ipost {
  id: string;
  title: string;
  body: string;
}
