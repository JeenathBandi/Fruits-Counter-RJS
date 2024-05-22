// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onEatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
      banana: prevState.banana,
    }))
  }

  onEatBanana = () => {
    this.setState(prevState => ({
      mango: prevState.mango,
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mango}</span> mangoes{' '}
            <span className="span-element">{banana}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruits">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.onEatMango} className="btn">
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                className="img"
                src="httpss://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.onEatBanana} className="btn">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
