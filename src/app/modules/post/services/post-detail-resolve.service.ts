import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolveService implements Resolve<Post> {
  constructor(private postService: PostService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    console.log('Post detail resole service.');
    const postId = +route.paramMap.get('id');
    return this.postService.show(postId);
  }
}
