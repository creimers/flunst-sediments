"use client";

import * as React from "react";

export default function Dig() {
  const [digCount, setDigCount] = React.useState(0);

  function doDig() {
    setDigCount(digCount + 1);
    fetch("/api/dig", { method: "POST" });
  }
  return (
    <div className="bg-white h-[100dvh] p-8 flex flex-col text-black select-none">
      <div className="flex-1">
        {digCount > 7 && (
          <div className="my-12 text-center text-8xl font-black uppercase space-y-3">
            <div>Gib</div> <div>alles</div>
            <div>!!</div>
          </div>
        )}
        {digCount > 0 && digCount <= 7 && (
          <div className="my-12 text-center text-4xl font-black">
            Immer weiter!
          </div>
        )}
        {digCount > 3 && digCount <= 7 && (
          <div className="my-12 text-center text-6xl font-black space-y-3">
            <div>Baggern!</div> <div>Baggern!</div> <div>Baggern!</div>
          </div>
        )}
      </div>
      {digCount === 0 && (
        <div className="animate-bounce space-y-4 py-4">
          <div className="text-center">
            Klicke hier, um den Schlick wegzubaggern.
          </div>
          <div className="text-center">&#8595;</div>
        </div>
      )}
      <button
        onClick={doDig}
        className="bg-yellow-300 text-black py-4 active:scale-95 font-semibold text-2xl"
      >
        BAGGERN
      </button>
    </div>
  );
}
