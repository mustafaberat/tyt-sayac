import React from 'react';
import './main.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const TARGET_YEAR = 2020;
const TARGET_MONTH = 6; // 0 is january so -1 all the time, check it
const TARGET_DAY = 25;
const TARGET_HOUR = 10;
const TARGET_MINUTE = 15;

const detailSecond = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">seconds</div>
    </div>
  );
};

const detailDay = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">days</div>
    </div>
  );
};

const detailHour = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">hours</div>
    </div>
  );
};

const detailMinute = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">minutes</div>
    </div>
  );
};


const Second = (props) => {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        initialRemainingTime={props.value}
        duration={60}
        onComplete={() => [true, 0]}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {detailSecond}
      </CountdownCircleTimer>
    </div>
  )
}

const Minute = (props) => {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        initialRemainingTime={props.value}
        duration={60}
        onComplete={() => [true, 0]}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {detailMinute}
      </CountdownCircleTimer>
    </div>
  )
}

const Day = (props) => {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying={false}
        initialRemainingTime={props.value}
        duration={365}
        onComplete={() => [true, 0]}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {detailDay}
      </CountdownCircleTimer>
    </div>
  )
}

const Hour = (props) => {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying={false}
        initialRemainingTime={props.value}
        duration={24}
        onComplete={() => [true, 0]}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {detailHour}
      </CountdownCircleTimer>
    </div>
  )
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forReFresh: false,
      remainMs: Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000,
      remainDays: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000) / 86400),
      remainHours: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000) / 3600) % 24,
      remainMinutes: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000) / 60) % 60,
      remainSecond: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000)) % 60,
    }
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        remainMs: Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000,
        remainDays: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000) / 86400),
        remainHours: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000) / 3600) % 24,
        remainMinutes: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000) / 60) % 60,
        remainSecond: Math.floor((Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000)) % 60,
      })
    }, 1000)
  }
  render() {
    return (
      <div className="container">
        <div style={{ display: 'flex' }}>
          <Day value={this.state.remainDays} />
          <Hour value={this.state.remainHours} />
          {this.state.remainSecond % 2 === 0 ? <Day value={this.state.remainMinutes} /> : <Minute value={this.state.remainMinutes} />}
          <Second value={this.state.remainSecond} />
        </div>

        <h1>Remain: {this.state.remainMs}</h1>
        <h1>Remain Days: {this.state.remainDays}</h1>
        <h1>Remain Hours: {this.state.remainHours}</h1>
        <h1>Remain Minutes: {this.state.remainMinutes}</h1>
        <h1>Remain Second: {this.state.remainSecond}</h1>

      </div>
    );
  }
}

export default App;

