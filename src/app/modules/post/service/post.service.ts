import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post.model';
import { throwError } from 'rxjs';
import { catchError, retry, retryWhen, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  postApi = 'http://localhost:3000/posts';
  myListApi = 'http://localhost:3000/my-list';

  constructor(private http:HttpClient) {
  }
  index(){
    return this.http.get(this.postApi).pipe(
      catchError(this.handleError),
      // retry(3)
      retryWhen(errors=> errors.pipe(delay(3000),take(3)))
      );
  }
  show(id:number){
    return this.http.get<Post>(`${this.postApi}/${id}`);
  }

  handleError(error:HttpErrorResponse){
    console.log("error occurred");
    return throwError('Something went wrong');
  }
  
  addToList(entity:Post){
    return this.http.post<Post>(this.myListApi,entity);

  }

  getMyList(){
    return this.http.get<Post[]>(this.myListApi);
  }

  removeItemFromList(entityId:number){
    return this.http.delete(`${this.myListApi}/${entityId}`);
  }

  update(id:number,entity:Post){
    return this.http.put<Post>(`${this.postApi}/${id}`,entity)
  }
}
