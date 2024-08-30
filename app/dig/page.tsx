"use client";

import * as React from "react";

export default function Dig() {
  const [hasDug, setHasDug] = React.useState(false);

  function doDig() {
    setHasDug(true);
    fetch("/api/dig", { method: "POST" });
  }
  return (
    <div className="bg-white h-screen p-8 flex flex-col justify-end text-black">
      {hasDug && (
        <div className="my-auto text-center text-4xl font-black">
          Gib alles!
        </div>
      )}
      {!hasDug && (
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
