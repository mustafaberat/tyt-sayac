import React from 'react';
import './main.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">seconds</div>
    </div>
  );
};


const Second = (props) => {
  console.log(props)
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={40}
        onComplete={() => [true, 0]}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remain: new Date(2020, 7, 25, 10, 15).getTime() - Date.now()
    }
  }

  componentDidMount = () => {
    setInterval(() => { this.setState({ remain: new Date(2020, 7, 25, 10, 15).getTime() - new Date().getTime() }) }, 1000)
  }

  render() {
    return (
      <div className="container">
        {/* <Second /> */}
        <h1>Remain: {this.state.remain}</h1>
        <h1>Remain Days: {this.state.remain / 1000 * 3600 * 24}</h1>
        <h1>Fark: </h1>
      </div>
    );
  }
}

export default App;

