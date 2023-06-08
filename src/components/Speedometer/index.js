// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => {
      console.log(`previous state ${prevState.count}`)
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return {count: prevState.count}
    })
  }

  onDecrease = () => {
    this.setState(prevState => {
      console.log(`previous state ${prevState.count}`)
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return {count: prevState.count}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h2 className="speed">
            Speed is <span>{count}mph</span>
          </h2>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button className="blue" onClick={this.onIncrease}>
              Accelerate
            </button>
            <button onClick={this.onDecrease}>Apply Brake</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
