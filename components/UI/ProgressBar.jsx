import React, { useEffect, useState } from "react";

export default function ProgressBar({
  setActive,
  isActive,
  durationTime,
  clipNotes,
}) {
  const [timeLeft, setTimeLeft] = useState(durationTime);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) {
      setProgress(100);

      setTimeout(() => {
        setActive((prev) => {
          let next = prev + 1;
          return next > clipNotes.length - 1 ? 0 : next;
        });
        setTimeLeft(durationTime);
        setProgress(0);
      }, 1000);

      return;
    }

    const id = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [timeLeft, durationTime, setActive, clipNotes.length]);

  useEffect(() => {
    const made = ((durationTime - timeLeft) / durationTime) * 100;
    setProgress(made);
  }, [timeLeft, durationTime]);

  return (
    <div className={`w-full  transition-all duration-500 ease-in  ${isActive ? "h-[2px]" : "h-0"}`}>
      <div
        className="h-full bg-black"
        style={{
          width: `${progress}%`,
          transition: "width 1s linear",
        }}
      ></div>
    </div>
  );
}
