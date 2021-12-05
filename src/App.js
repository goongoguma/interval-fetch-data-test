import React from 'react';
import useInterval from './useInterval';
import './App.css';


function App() {
  const { data } = useInterval();

  console.log(data)

  return (
    <div className="App">
      {
        data?.map(item => (
          <div className="item" key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        )) 
      }
    </div>

  );
}

export default App;
