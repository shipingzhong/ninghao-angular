import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  postEditForm = this.formBuilder.group({
    title: [''],
    body: [''],
    image: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => this.postService.show(+params.get('id'))))
      .subscribe((data) => {
        this.postEditForm.patchValue(data);
        console.log(data);
      });
    //上面也可以用setValue, 不过patchValue更像是打补丁的意思
  }

  onSubmit() {
    console.log(this.postEditForm.value);
    this.postService
      .update(+this.route.snapshot.paramMap.get('id'), this.postEditForm.value)
      .subscribe();
  }
}
