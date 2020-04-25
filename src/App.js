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

const detailMinute2 = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">updating..</div>
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

const Minute2 = (props) => {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        initialRemainingTime={props.value}
        duration={60}
        onComplete={() => [true, 0]}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {detailMinute2}
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
      remainMs: Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000,
    }
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        remainMs: Math.abs(new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, TARGET_MINUTE).getTime() - new Date().getTime()) / 1000,
      })
    }, 1000)
  }
  render() {
    let remainDays = Math.floor(this.state.remainMs / 86400);
    let remainHours = Math.floor(this.state.remainMs / 3600) % 24;
    let remainMinutes = Math.floor(this.state.remainMs / 60) % 60;
    let remainSecond = Math.floor(this.state.remainMs) % 60;

    return (
      <div className="container">
        <div style={{ display: 'flex' }}>
          <Day value={remainDays} />
          <Hour value={remainHours} />
          {remainSecond === 0 ? <Minute2 value={remainMinutes} /> : <Minute value={remainMinutes} />}
          <Second value={remainSecond} />
        </div>

        <h1>Remain: {this.state.remainMs}</h1>
        <h1>Remain Days: {remainDays}</h1>
        <h1>Remain Hours: {remainHours}</h1>
        <h1>Remain Minutes: {remainMinutes}</h1>
        <h1>Remain Second: {remainSecond}</h1>

      </div>
    );
  }
}

export default App;

