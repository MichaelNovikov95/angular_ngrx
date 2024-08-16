import { createSelector } from '@ngrx/store';
import { Counter } from './counter.reducer';

export interface CounterState {
  counter: Counter;
}

export const selectCounter = (state: CounterState) => state.counter;

export const selectFeatureCount = createSelector(
  selectCounter,
  (state: Counter) => state.counter
);
