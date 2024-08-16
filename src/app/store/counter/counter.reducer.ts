import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface Counter {
  counter: number;
}

export const initialCounterState: Counter = {
  counter: 0,
};

export const CounterFeatureKey = 'counter';

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => ({ counter: state.counter + 1 })),
  on(decrement, (state) => ({ counter: state.counter - 1 })),
  on(reset, (state) => ({ counter: state.counter * 0 }))
);
