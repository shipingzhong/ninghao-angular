import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input()
  entity:Post =  new Post(0,'','');

  @Output()
  remove = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onClick(entity: Post){
    this.remove.emit(entity);
  }

}
