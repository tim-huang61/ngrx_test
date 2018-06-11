import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/';
import { DECREMENT, INCREMENT, RESET } from './../../counter.action';
import { CounterState } from './../../counter.store';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  title = 'Page2';
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
