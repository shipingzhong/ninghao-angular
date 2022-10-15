import { Component, OnInit } from '@angular/core';
import { Post } from './model/post.model';
import { posts } from './posts';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'Posts';
  // entities = [{id:1,title:'hello',body:'aaaaaaa'},{id:2,title:'hola',body:'bbbbbbb'},{id:3,title:'您好'},]
  entities: Post[];

  // constructor() {
  //   this.entities = posts;
  //  }
  constructor(private postService:PostService ) {
    this.entities = this.postService.index();
   }

  ngOnInit(): void {
  }
  removeItem(item:Post){
    console.log('remove...'+item);
    this.entities = this.entities.filter((entity)=>{
      return entity.id != item.id;
    });
  }

}
