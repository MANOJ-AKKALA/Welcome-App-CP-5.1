// Write your code here

import {Component} from 'react'

class Welcome extends Component {
  state = {isSub: true}

  onClickIsSub = () => {
    this.setState(i => ({isSub: !i.isSub}))
  }

  creatingButtonText = () => {
    const {isSub} = this.state
    return isSub ? 'Subscribed,Thankyou !' : 'Please Subscribe'
  }

  render() {
    const getButton = this.creatingButtonText()

    return (
      <div>
        <h1>Welcome</h1>
        <p>Thankyou! Happy Learning </p>
        <button type="button" onClick={this.onClickIsSub}>
          {getButton}
        </button>
      </div>
    )
  }
}

export default Welcome
