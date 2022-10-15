import { Component, OnInit } from '@angular/core';
import { Post } from './model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities = [{title:'hello',body:'aaaaaaa'},{title:'hola',body:'bbbbbbb'},{title:'您好'},]

  constructor() { }

  ngOnInit(): void {
  }
  removeItem(item:number){
    console.log('remove...'+item);
    this.entities = this.entities.filter((entity,index)=>{
      return index != item;
    });
  }

}
