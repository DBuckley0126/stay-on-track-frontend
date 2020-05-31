import React, {useState, useEffect} from 'react';
import { useTimer } from 'react-timer-hook';

setInterval(() => {
  handleTimerClick();
}, 1000);

const useCountDown = () => {
  const [interval, updateInterval] = useState();
  const [currentTime, setCurrentTime] = useState(103);
  const [maxTime, setMaxTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  console.log('Countdown refresh');
  console.log(currentTime);

  // useEffect(() => {
  //   // setInterval(() => {
  //   //   setCurrentTime(currentTime - 1);
  //   //   console.log('TIMER CYCLE');
  //   // }, 1000);

  //   startTime()
  // }, []);

  useEffect(() => {
    setInterval(() => {
      handleTimerClick();
    }, 1000);
  }, []);

  const handleTimerClick = () => {
    if (timerActive) {
      setCurrentTime(currentTime => currentTime - 1);
    }
  };

  const start = () => {
    // const aInterval = setInterval(()=>{
    //   let newTime = currentTime - 1;
    //   setCurrentTime(newTime);
    //   console.log(newTime);
    // }, 1000)
    // setInterval(interval);
    // setTimerActive(true);
    // console.log('start timer');
    // setTimeout(function() {
    //   startTime();
    // }, 100);

    // setCurrentTime(10);
    setTimerActive(state => true);
    console.log('start button pressed');
    console.log(timerActive);

    // updateInterval(setInterval(removeOneSecond, 1000));
    // removeOneSecond();
  };

  const stop = () => {
    console.log('clear interval');
    setTimerActive(false);
    // clearInterval(interval);
    // updateInterval();
  };


  const updateTimes = times => {
    setMaxTime(times.maxTime);
    setCurrentTime(times.currentTime);
  };

  function startTime() {
    console.log(`Timer new cycle?`);
    console.log(timerActive);
    if (timerActive) {
      setTimeout(function() {
        startTime();
      }, 1000);
    }
    setCurrentTime(currentTime => currentTime - 1);
  }

  // const run = (ts) => {
  //   if (!timer.current.started) {
  //     timer.current.started = ts;
  //     timer.current.lastInterval = ts;
  //   }

  //   if ((ts - timer.current.lastInterval) >= interval) {
  //     timer.current.lastInterval += interval;
  //     setTimeLeft(timeLeft => timeLeft - interval);
  //   }

  //   if (ts - timer.current.started < timer.current.timeToCount) {
  //     timer.current.requestId = window.requestAnimationFrame(run);
  //   }
  // }

  // const start = React.useCallback(
  //   (ttc) => {
  //     window.cancelAnimationFrame(timer.current.requestId);

  //     const newTimeToCount = ttc !== undefined ? ttc : timeToCount
  //     timer.current.started = null;
  //     timer.current.lastInterval = null;
  //     timer.current.timeToCount = newTimeToCount;
  //     timer.current.requestId = window.requestAnimationFrame(run);

  //     setTimeLeft(newTimeToCount);
  //   },
  //   [timer, setTimeLeft],
  // );

  return [currentTime, start, stop, updateTimes];
};

export default useCountDown;
