import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input()
  entity: Post = new Post(0, '', '');
  // entity:Post =  {id:0,title:'',body:''};

  @Output()
  remove = new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  onClick(entity: Post) {
    this.remove.emit(entity);
  }
  addToList(entity: Post) {
    this.postService.addToList(entity).subscribe();
  }
}
