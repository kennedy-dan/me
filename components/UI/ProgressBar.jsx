"use client"
import React, { useEffect, useState } from "react";

export default function ProgressBar({
  setActive,
  isActive,
  durationTime,
  expertiseAreas,
}) {
  const [timeLeft, setTimeLeft] = useState(durationTime);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) {
      setProgress(100);

      setTimeout(() => {
        setActive((prev) => {
          let next = prev + 1;
          return next > expertiseAreas.length - 1 ? 0 : next;
        });
        setTimeLeft(durationTime);
        setProgress(0);
      }, 800);

      return;
    }

    const id = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [timeLeft, durationTime, setActive, expertiseAreas.length]);

  useEffect(() => {
    const made = ((durationTime - timeLeft) / durationTime) * 100;
    setProgress(made);
  }, [timeLeft, durationTime]);

  return (
    <div className={`
      w-full transition-all duration-500 ease-in
      ${isActive ? "h-[1px]" : "h-0"}
    `}>
      <div
        className="h-full bg-gray-300"
        style={{
          width: `${progress}%`,
          transition: "width 1s linear",
        }}
      />
    </div>
  );
}