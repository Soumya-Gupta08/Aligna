import React from "react";

const CircularProgress = ({ percentage }) => {
  const size = 100;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (

    
    <div
      className="flex h-55 w-55 rounded-50"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        /* Background Circle */
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#240046"
          fill="transparent"
          strokeWidth={strokeWidth}
        />

        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ffee9d"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
        />
      </svg>

      {/* Percentage Text */}
      <span
        className="absolute text-2xl font-bold pointer-events-none"
        style={{ color: "#ffee9d" }}
      >
        {percentage}%
      </span>

      {/* Hover Outline */}
      <div
        className="absolute rounded-full border border-yellow-300/30 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          width: size + 6,
          height: size + 6,
        }}
      ></div>
    </div>
  );
};

export default CircularProgress;







