import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { increment, decrement, reset } from '../store/counter/counter.actions';

import {
  selectCounter,
  CounterState,
} from '../store/counter/counter.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
})
export class MyCounterComponent implements OnDestroy {
  private subscription = new Subscription();

  counter$ = 0;

  constructor(private store: Store<CounterState>) {
    this.subscription.add(
      this.store
        .select(selectCounter)
        .subscribe((v) => (this.counter$ = v.counter))
    );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
