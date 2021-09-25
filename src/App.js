import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import { decrement, increment, incrementbySpecificValue } from './slices/counterSlice';

function App() {

  
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        Count: {count}
      </div>
      <div>
         <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())} >Decrement</button>
      <button onClick= {() => dispatch(incrementbySpecificValue(33))} >Increment by 33</button>
      </div>
    </div>
  );
}

export default App;
