// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: false}

  onAction = () => {
    this.setState(prevState => ({
      isLight: !prevState.isLight,
    }))
  }

  render() {
    const {isLight} = this.state
    const buttonText = isLight ? 'Dark Mode' : 'Light Mode'
    const clsname = isLight ? 'light' : 'dark'
    return (
      <div className="container">
        <div className={clsname}>
          <h1 className="h1">Click To Change Mode</h1>
          <button className="btn1" type="button" onClick={this.onAction}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
