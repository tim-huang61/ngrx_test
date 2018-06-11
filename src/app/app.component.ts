import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/';
import { DECREMENT, INCREMENT, RESET } from './counter.action';
import { CounterState } from './counter.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.counter = store.select('counter');
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
