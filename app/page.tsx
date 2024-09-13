"use client";
import * as React from "react";
import { useChannel, useConnectionStateListener } from "ably/react";

import { useInterval } from "react-use";
import { ABLY_CHANEL_NAME } from "@/lib/constants";
import QRCode from "@/components/qr-code";
import Wave from "@/components/wave";
import Crab from "@/components/crab";
import Lilly from "@/components/lilly";

const MUD_HEIGHT = 90;

export default function Home() {
  const [clickCount, setClickCount] = React.useState(0);
  const [mostRecentClick, setMostRecentClick] = React.useState<Date | null>(
    null
  );
  const [clickAge, setClickAge] = React.useState(100000);

  useConnectionStateListener("connected", () => {
    console.log("Connected to Ably!");
  });

  // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
  const { channel } = useChannel(ABLY_CHANEL_NAME, "first", (message) => {
    // setMessages(previousMessages => [...previousMessages, message]);
    // console.log("Received message:", message);
    handleClick();
  });

  useInterval(() => {
    if (clickCount > 0) {
      setClickCount(clickCount - 2);
    }
    if (mostRecentClick) {
      setClickAge(new Date().getTime() - mostRecentClick!.getTime());
    }
  }, 1000);

  function handleClick() {
    if (MUD_HEIGHT - clickCount > 10) {
      if (clickCount <= 0) {
        setClickCount(clickCount + 5);
      } else {
        setClickCount(clickCount + 2);
      }
    }
    setMostRecentClick(new Date());
    setClickAge(0);
  }

  const mudHeight = MUD_HEIGHT - clickCount;

  return (
    <div
      className="h-screen bg-gradient-to-b from-cyan-500/50 to-blue-900 relative overflow-hidden"
      onClick={handleClick}
    >
      <div className="w-24 h-24 absolute left-2/3 top-1/2 rounded-full bg-white/10 blur-sm"></div>
      <div className="w-12 h-12 absolute left-3/4 top-2/3 rounded-full bg-white/10 blur-sm"></div>
      <div className="w-12 h-12 absolute left-3/4 top-1/3 rounded-full bg-white/10 blur-sm"></div>
      <div
        className="h-screen w-12 bg-gradient-to-b from-white/50 via-transparent blur-xl absolute left-1/2 rotate-2"
        id="light-2"
      ></div>
      <div
        className="h-screen w-4 bg-gradient-to-b from-white/70 via-white/20 blur-lg absolute left-1/4 -rotate-3"
        id="light-1"
      ></div>
      <div className="flex justify-around absolute bottom-14 2xl:bottom-20 left-0 w-screen z-20">
        <div className="max-w-[20vw] w-full rocking-crab">
          <Crab />
        </div>
        <div className="max-w-[20vw] w-full rocking-crab">
          <Crab />
        </div>
      </div>
      <div className="absolute bottom-0 left-[15vw] z-10 h-[45vh] flex items-end swaying-water-lily delay-100">
        <div className="-scale-x-100 h-full w-full">
          <Lilly />
        </div>
      </div>
      <div className="absolute bottom-0 left-[10vw] h-[40vh] flex items-end swaying-water-lily delay-100">
        <Lilly />
      </div>
      <div className="absolute bottom-0 left-1/3 z-10 h-[80vh] flex items-end swaying-water-lily">
        <Lilly />
      </div>
      <div className="absolute bottom-0 left-1/2 z-10 h-[50vh] flex items-end swaying-water-lily delay-100">
        <Lilly />
      </div>
      <div className="absolute bottom-0 left-3/4 z-10 h-[100vh] flex items-end swaying-water-lily delay-100">
        <div className="-scale-x-100 h-full w-full">
          <Lilly />
        </div>
      </div>
      <div
        className=" absolute bottom-0 left-0 z-30 w-screen transition-transform h-screen flex flex-col"
        style={{ transform: `translateY(${100 - mudHeight}vh)` }}
      >
        <div className="flex-shrink-0 text-mud-500 translate-y-2">
          <Wave />
        </div>
        <div className="flex-1 bg-gradient-to-b from-mud-500 to-mud-900"></div>
      </div>
      {mudHeight > 60 && clickAge > 5000 && (
        <div className="absolute bottom-0 text-white z-50 w-screen py-12 2xl:py-20 flex flex-col items-center space-y-12 2xl:space-y-20">
          <QRCode />
          <p className="text-center text-3xl 2xl:text-5xl">
            Scanne den QR-Code und hilf mit, den Schlick auszubaggern!
          </p>
        </div>
      )}
    </div>
  );
}
