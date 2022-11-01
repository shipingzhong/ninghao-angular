import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  delay,
  retry,
  retryWhen,
  take,
  throwError,
  Observable,
} from 'rxjs';
import { Post } from '../model/post.model';
import { posts } from '../posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  entities: Post[];

  postsApi = 'http://localhost:3000/posts';
  myListApi = 'http://localhost:3000/my-list';
  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(this.postsApi).pipe(
      catchError(this.handleError),
      // retry(3)
      retryWhen((errors) => {
        return errors.pipe(delay(3000), take(3));
      })
    );
  }
  show(id: number) {
    return this.http.get<Post>(`${this.postsApi}/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    //  return throwError('Something went wrong');
    return throwError(() => new Error('Something went wrong'));
  }

  addToList(entity: Post) {
    return this.http.post<Post>(this.myListApi, entity);
  }
  getMyList() {
    return this.http.get<Post[]>(this.myListApi);
  }

  removeItemFromList(entityId: number) {
    return this.http.delete(`${this.myListApi}/${entityId}`);
  }

  update(id: number, entity) {
    return this.http.put(`${this.postsApi}/${id}`, entity);
  }
}
