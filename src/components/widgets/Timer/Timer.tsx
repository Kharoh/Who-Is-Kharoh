import React, { useState, useEffect } from 'react'



const Timer = (props: TimerProps) => {
  const [duration, setDuration] = useState(Math.abs(props.date - Date.now()))

  useEffect(() => {
    const tick = () => {
      setDuration(Math.abs(props.date - Date.now()))
    }
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [props.date])

  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / 60000) % 60)
  const hours = Math.floor((duration / 3600000) % 24)
  const days = Math.floor((duration / 86400000) % 365)
  const years = Math.floor(duration / 31536000000)


  return (
    <div id="Timer">
      <div className="years">
        {years}
      </div>
      <div className="days">
        {days}
      </div>
      <div className="hours">
        {hours}
      </div>
      <div className="minutes">
        {minutes}
      </div>
      <div className="seconds">
        {seconds}
      </div>
    </div>
  )
}

interface TimerProps {
  date: number
}

export default Timer
