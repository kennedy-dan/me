import React from "react";

export default function Loader() {
  return (
    <div class="loader-container h-screen flex justify-center flex-col items-center">
      <div class="loader-wrapper">
        <div class="square-loader h-[88px] w-[88px] shadow-2xl rounded-xl ">
          <div class="gray-segment segment-1"></div>
          <div class="gray-segment segment-2"></div>
          <div class="gray-segment segment-3"></div>
          <div class="gray-segment segment-4"></div>
          <div className="h-[32px] w-[32px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    ">
            <div className="relative">
              <div class="dark-box "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
