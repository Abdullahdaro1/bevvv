// components/LeaveCard.jsx
import leave1 from "@/assets/leave1.svg";
import Image from "next/image";
import React from "react";

export default function LeaveCard() {
  return (
    <div className="relative bg-teal-500 rounded-2xl overflow-hidden w-full max-w-4xl mx-auto">
      {/* ---- Decorative paper planes (dashed lines) ---- */}
      <svg
        className="absolute top-4 left-4 w-32 h-32 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* white dashed/path */}
        <path
          d="M5 80 L60 20 L70 30 L15 90"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
        />
        <polygon
          points="60,20 65,22 63,27 60,20"
          fill="white"
          opacity="0.8"
        />
        <polygon
          points="70,30 75,32 73,37 70,30"
          fill="white"
          opacity="0.8"
        />
      </svg>

      {/* ---- Another paper plane on opposite corner ---- */}
      <svg
        className="absolute bottom-4 right-4 w-32 h-32 opacity-30 transform rotate-45"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 80 L60 20 L70 30 L15 90"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
        />
        <polygon
          points="60,20 65,22 63,27 60,20"
          fill="white"
          opacity="0.8"
        />
        <polygon
          points="70,30 75,32 73,37 70,30"
          fill="white"
          opacity="0.8"
        />
      </svg>

      {/* ---- Actual content: Flex container ---- */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-10 space-y-6 md:space-y-0">
        {/* Left side: Text */}
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-extrabold mb-2">
            Manage <span className="text-yellow-400">ALL Leave</span> Applications
          </h1>
          <p className="text-lg opacity-90">
            Supporting your calm, Enhancing Performance
          </p>
        </div>

        {/* Right side: Illustration */}
          <Image
            src={leave1}
            alt="Person meditating at desk"
            width={250}
            height={250}
            priority
          />
      </div>
    </div>
  );
}
