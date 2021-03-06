import React from 'react'

class CountdownForm extends React.Component {
  onSubmit (e) {
    e.preventDefault()
    let secondsStr = this.refs.seconds.value

    if (secondsStr.length > 0 && secondsStr.match(/^[0-9]*$/)) {
      this.refs.seconds.value = ''
      this.props.onSetCountdownTime(parseInt(secondsStr, 10))
    }

    if (this.refs.seconds.value === 0) {

    }
  }

  render () {
    return (
      <div>
        <form ref='form' onSubmit={this.onSubmit.bind(this)} className='countdown-form'>
          <input type='text' ref='seconds' placeholder='Enter time in seconds' />
          <input type='submit' className='button success expanded' value='Start Countdown' />
        </form>
      </div>
    )
  }
}

export default CountdownForm
