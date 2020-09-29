import React from 'react';
import ReactDOM from 'react-dom';
import './Counter.css';

function Clock(props) {
    return (
      <div>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }

  setInterval(tick, 1000);

export default Clock;