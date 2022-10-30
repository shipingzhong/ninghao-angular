import { Component, OnInit } from '@angular/core';
import { Post } from './model/post.model';
import { posts } from './posts';
import { PostService } from './services/post.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  // entities = [{id:1,title:'hello',body:'aaaaaaa'},{id:2,title:'hola',body:'bbbbbbb'},{id:3,title:'您好'},]
  entities: Post[];
  selectedId: number;

  // constructor() {
  //   this.entities = posts;
  //  }
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedId = +params.get('id');
    });
    const entities$ = this.postService.index();
    const observer = {
      next: (data: any) => {
        this.entities = data;
      },
      error: (error: HttpErrorResponse) => console.log(error),
    };
    // entiies$.subscribe((data: any) => {
    //   this.entities = data;
    // });
    entities$.subscribe(observer);
  }
  removeItem(item: Post) {
    console.log('remove...' + item);
    this.entities = this.entities.filter((entity) => {
      return entity.id != item.id;
    });
  }
}
