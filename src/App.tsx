import React from 'react';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './reducers/CounterReducerComponent';

function App() {
  return (
    <div>

      <Counter initialValue={6} />
      <CounterBy initialValue={2} />
      <CounterEffect initialValue={2} />
      <CounterHook initialValue={2} />
      <CounterReducerComponent initialValue={1} />
    </div>
  );
}

export default App;
