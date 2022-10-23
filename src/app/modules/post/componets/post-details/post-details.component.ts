import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../model/post.model';
import { posts } from '../../posts';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  entity: Post;

  // constructor(private route: ActivatedRoute) { }
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.route);
    // this.route.paramMap.subscribe((params) => {
    //   const postId = +params.get('id');
    //   console.log(postId);
    //   // this.entity = posts.find(post=> post.id === postId);
    //   this.entity = this.postService.show(postId);
    // });
    //下面这个为什么报错
    // this.route.data.subscribe((data: { entity: Post }) => {
    //下面这个是对的
    // this.route.data.subscribe((data) => {
    //   console.log(data);
    //   this.entity = data['entity'];
    // });
    //下面这个也是对的
    this.route.data.subscribe((data: any) => {
      console.log(data);
      this.entity = data.entity;
    });
  }
  // gotoPosts() {
  //   this.router.navigate(['/posts']);
  // }
  gotoPosts(entity: Post) {
    this.router.navigate(['/posts', { id: entity.id }]);
  }
}
