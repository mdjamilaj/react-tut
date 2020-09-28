import React from 'react';
import './Counter.css';

decrease = () => {
    this.setState({
        count: this.state.count - 1
    })
}

increase = () => {
    this.setState({
        count: this.state.count - 1
    })
    console.log(count);
} 

function Counter(props) {
    return (
        <div>
            <h1>
                <button onClick={ this.decrease }>-</button>
                <input type="number" defaultValue={count}/>
                <button onClick={ this.increase }>+</button>
            </h1>
        </div>
    );
}

function tick() {
    ReactDOM.render(
      <Counter count={0} />,
      document.getElementById('root')
    );
  }

export default Counter;