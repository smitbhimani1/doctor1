import React from 'react'
import Clock from 'react-live-clock';

const ClockFun = () => {
  return (
    <Clock format={'H:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />
  )
}

export default ClockFun