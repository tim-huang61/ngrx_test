import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/';
import { DECREMENT, INCREMENT, RESET } from './../../counter.action';
import { CounterState } from './../../counter.store';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  title = 'Page1';
  counter: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.counter = store.select('counter');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({
      type: INCREMENT,
      payload: {
        value: 1
      }
    });
  }

  decrement() {
    this.store.dispatch({
      type: DECREMENT,
      payload: {
        value: 1
      }
    });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
