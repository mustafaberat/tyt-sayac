import React from 'react';
import './main.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const TARGET_YEAR = 2020;
const TARGET_MONTH = 5; // 0 is january so -1 all the time, check it
const TARGET_DAY = 25;
const TARGET_HOUR = 10;
const TARGET_MINUTE = 15;
const INNER_WIDTH = (window.innerWidth / 2.6) > 180 ? 180 : (window.innerWidth / 2.6); //180: default width

const detailSecond = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">saniye</div>
    </div>
  );
};

const detailDay = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">gün</div>
    </div>
  );
};

const detailHour = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">saat</div>
    </div>
  );
};

const detailMinute = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">dakika</div>
    </div>
  );
};

const detailMinute2 = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="timer-time">{remainingTime}</div>
      <div className="timer-title">güncelleniyor..</div>
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
        size={INNER_WIDTH}
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
        size={INNER_WIDTH}
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
        size={INNER_WIDTH}
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
        size={INNER_WIDTH}
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
        size={INNER_WIDTH}
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
        <div className="header">
          <h1 className="header-title">TYT {TARGET_YEAR} Sayacı</h1>
        </div>
        <div className="hours-container">
          <div className="withTwo withTwo1">
            <Day value={remainDays} />
            <Hour value={remainHours} />
          </div>
          <div className="withTwo withTwo2">
            {remainSecond === 0 ? <Minute2 value={remainMinutes} /> : <Minute value={remainMinutes} />}
            <Second value={remainSecond} />
          </div>
        </div>

        <section className="details-container">
          <h3 className="details-title">Ayrıntılar</h3>
          <p className="details-detail">Temel Yeterlilik Testi</p>
          <p className="details-detail">Yükseköğretim Kurumları Sınavı 1. Oturum</p>
          <p className="details-detail">Sınav Tarihi: <span>{TARGET_DAY} Temmuz {TARGET_YEAR} Cumartesi</span></p>
          <p className="details-detail">Sınav Saati: <span>10.15</span></p>
          <p className="details-detail mb">Sınav Süresi: <span>135 dk</span></p>

        </section>

        {/* <h1>Remain: {this.state.remainMs}</h1>
        <h1>Remain Days: {remainDays}</h1>
        <h1>Remain Hours: {remainHours}</h1>
        <h1>Remain Minutes: {remainMinutes}</h1>
        <h1>Remain Second: {remainSecond}</h1> */}

      </div>
    );
  }
}

export default App;

