import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, pipe, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-obeservable-demo',
  templateUrl: './obeservable-demo.component.html',
  styleUrls: ['./obeservable-demo.component.css'],
})
export class ObeservableDemoComponent implements OnInit, OnDestroy {
  demoObservable: Observable<any>;
  demoSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    // this.demoObservable = interval(1000);
    //  下面是使用map方法
    // const someNumber = interval(1000);
    // const transformValue = map((value) => `# ${value}`);
    // this.demoObservable = transformValue(someNumber);
    //下面是使用pipe函数
    // const someNumber = interval(1000);
    // const transformValue = pipe(
    //   filter((value: number) => value % 2 !== 0),
    //   map((value) => `# ${value}`)
    // );
    // this.demoObservable = transformValue(someNumber);
    //下面是使用Observable的pipe方法
    this.demoObservable = interval(1000).pipe(
      filter((value: number) => value % 2 !== 0),
      map((value) => `# ${value}`)
    );
  }

  ngOnDestroy(): void {
    if (this.demoSubscription) {
      console.log('ngOnDestroy: Unsubscribe demo observable.');
      this.demoSubscription.unsubscribe();
    }
  }

  // onClick() {
  //   this.demoObservable.subscribe((value) => console.log(value));
  // }
  onClick() {
    const observer = {
      next: (value: string) => console.log(value),
      error: (error: string) => console.log(error),
      complete: () => console.log('Demo observale completed.'),
    };
    this.demoSubscription = this.demoObservable.subscribe(observer);
  }
  unSubscribe() {
    this.demoSubscription.unsubscribe();
  }
}
