import { useState, useEffect } from 'react';

interface ClockDisplayProps {
  time: Date;
  format24: boolean;
  label: string;
}

function ClockDisplay({ time, format24, label }: ClockDisplayProps) {
  const formattedTime = time.toLocaleTimeString('uk-UA', {
    hour12: !format24,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = time.toLocaleDateString('uk-UA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="clock-box">
      <span className="clock-label">{label}</span>
      <div className="clock-time">{formattedTime}</div>
      <div className="clock-date">{formattedDate}</div>
    </div>
  );
}

interface LiveClockProps {
  label?: string;
  format24?: boolean;
}

export function LiveClock({ label = 'Поточний місцевий час', format24 = true }: LiveClockProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="card clock-card">
      <ClockDisplay time={currentTime} format24={format24} label={label} />
    </div>
  );
}