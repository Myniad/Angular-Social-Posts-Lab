import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  Post:Post[]=[
    {
      title:"test1",
      thought:"this is my first test post"
    },
    {
      title:"test dos",
      thought:"this is my second test post"
    },
    {
      title:"test drei",
      thought:"this is my third test post"
    }
  ];

  AddPost(newPost:Post):void{
    this.Post.push(newPost);
  }

}
