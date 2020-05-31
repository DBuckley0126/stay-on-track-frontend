// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';
import {authenticationActions} from '../actions/index';
import {PieChart} from 'react-minimal-pie-chart';
import {useStopwatch} from 'react-timer-hook';

const Timer = props => {
  const [maxTime, setMaxTime] = useState(props.maxTime);
  const [currentGoneTime, setCurrentGoneTime] = useState(
    props.initialCurrentGoneTime,
  );
  const [timeBuffer, setTimeBuffer] = useState(0);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({autoStart: false});

  console.log(seconds);

  const handleTimerClick = () => {
    if (isRunning) {
      pause();
      // clearInterval(interval);
    } else {
      start();
      // setInterval(()=>{
      //   setCurrentTime(currentTime - 0.01);
      // }, 1000);
      // updateInterval(newinterval);
    }
  };

  const convertTimesIntoPercentages = () => {
    const timeRemainingNumber = (currentGoneTime - seconds) / maxTime;
    const timeRemainingPercentage = timeRemainingNumber * 100;
    const timeGonePercentage = 100 - timeRemainingPercentage;
    return {
      timeGonePercentage,
      timeRemainingPercentage,
    };
  };

  const timerVariants = {
    unActive: {
      scale: 0.5,
      transition: {
        default: {duration: 1, ease: 'easeOut'},
        scale: {duration: 0.2},
        opacity: {duration: 1, ease: 'easeOut', delay: 1},
        backgroundColor: {duration: 0.4, ease: 'easeOut'},
      },
    },
    active: {
      scale: 1,
      transition: {
        default: {duration: 1, ease: 'easeOut'},
        scale: {duration: 0.2, type: 'spring', stiffness: 200},
        opacity: {duration: 1, ease: 'easeOut', delay: 2.5},
        shadow: {duration: 1, ease: 'easeOut', delay: 3},
        backgroundColor: {duration: 0.4, ease: 'easeOut'},
      },
    },
    exit: {
      scale: 0.5,
      transition: {
        default: {duration: 1, ease: 'easeOut'},
        scale: {duration: 0.2},
        opacity: {duration: 0.5, ease: 'easeOut', delay: 0.2},
        backgroundColor: {duration: 0.4, ease: 'easeOut'},
      },
    },
  };

  const generateAnimationState = () => {
    if (isRunning) {
      return 'active';
    } else {
      return 'unActive';
    }
  };

  return (
    <AnimatePresence>
      <Frame
        style={{
          height: '200px',
          width: '200px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}
        onClick={() => handleTimerClick()}
        center="x"
        variants={timerVariants}
        initial={'unActive'}
        animate={generateAnimationState()}
        id="timer-container">
        <Frame
          style={{
            height: '90%',
            width: '90%',
            borderRadius: '100%',
            backgroundColor: props.colorSet.secondary,
          }}
          center
          id="timer-back"></Frame>
        <Frame
          style={{
            height: '100%',
            width: '100%',
            rotateY: 180,
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }}
          center
          id="timer-front">
          <PieChart
            data={[
              {
                title: 'Time Gone',
                value: convertTimesIntoPercentages().timeGonePercentage,
                color: 'rgba(0, 0, 0, 0)',
              },
              {
                title: 'Time Remaining',
                startAngle: 270,
                value: convertTimesIntoPercentages().timeRemainingPercentage,
                color: props.colorSet.primary,
              },
            ]}
          />
        </Frame>
        <UserClockInputs
          setMaxTime={setMaxTime}
          maxTime={maxTime}
          currentGoneTime={currentGoneTime}
          setCurrentGoneTime={setCurrentGoneTime}
        />
      </Frame>
    </AnimatePresence>
  );
};

const UserClockInputs = props => {
  const setMaxTime = props.setMaxTime;
  const maxTime = props.maxTime;

  const setCurrentGoneTime = props.setCurrentGoneTime;
  const currentGoneTime = props.currentGoneTime;

  const setExternalMaxTime = timeObject => {
    const minuteSeconds = timeObject.minutes * 60;
    const seconds = timeObject.seconds;

    setMaxTime(minuteSeconds + seconds);
  };

  const setExternalGoneTime = timeObject => {
    const minuteSeconds = timeObject.minutes * 60;
    const seconds = timeObject.seconds;

    setCurrentGoneTime(minuteSeconds + seconds);
  };

  const intialMaxTimeConverter = () => {
    return {minutes: Math.floor(maxTime / 60), seconds: maxTime % 60};
  };

  const intialGoneTimeConverter = () => {
    return {
      minutes: Math.floor(currentGoneTime / 60),
      seconds: currentGoneTime % 60,
    };
  };
  return (
    <Frame
      style={{
        height: '200px',
        width: '200px',
        marginTop: '300px', 
        backgroundColor: 'rgba(0, 0, 0, 0)',
      }}>
      <ClockInput
        setExternalTime={setExternalMaxTime}
        initialMinutes={intialMaxTimeConverter().minutes}
        initialSeconds={intialMaxTimeConverter().seconds}
      />
      <ClockInput
        setExternalTime={setExternalGoneTime}
        initialMinutes={intialGoneTimeConverter().minutes}
        initialSeconds={intialGoneTimeConverter().seconds}
      />
    </Frame>
  );
};

const ClockInput = props => {
  const [inputMinutes, setInputMinutes] = useState(props.initialMinutes);
  const [inputSeconds, setInputSeconds] = useState(props.initialSeconds);

  const setExternalTime = props.setExternalTime;

  const handleChangeMinutes = event => {
    setInputMinutes(event.target.value.replace(/\+|-/gi, ''));
    setExternalTime({minutes: inputMinutes, seconds: inputSeconds});
  };
  const handleChangeSeconds = event => {
    setInputSeconds(event.target.value.replace(/\+|-/gi, ''));
    setExternalTime({minutes: inputMinutes, seconds: inputSeconds});
  };
  return (
    <>
      <input
        type="number"
        className="time-input"
        value={inputMinutes}
        onChange={handleChangeMinutes}
      />
      <h1 className="time-input-seperator">:</h1>
      <input
        className="time-input"
        type="number"
        value={inputSeconds}
        onChange={handleChangeSeconds}
      />
    </>
  );
};

export default Timer;
