import { useState, useEffect, useCallback } from "react";

// Define the return type of the hook
interface TimerHook {
  time: string;
  startTimer: () => void;
  resetTimer: (newMinutes: number) => void;
  isRunning: boolean;
}

export function useTimer(initialMinutes: number): TimerHook {
  const [timeInSeconds, setTimeInSeconds] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Convert seconds into MM:SS format
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Start the timer
  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  // Pause the timer
  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  // Reset timer with a new value
  const resetTimer = useCallback((newMinutes: number) => {
    setIsRunning(false);
    setTimeInSeconds(newMinutes * 60);
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeInSeconds((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setIsRunning(false);
          return 0; // Stop at 00:00
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [isRunning]);

  return {
    time: formatTime(timeInSeconds),
    startTimer,
    resetTimer,
    isRunning,
  };
}
