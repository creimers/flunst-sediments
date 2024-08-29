"use client";

export default function Dig() {
  function doDig() {
    fetch("/api/dig", { method: "POST" });
  }
  return (
    <div className="bg-white h-screen p-8 flex flex-col justify-end">
      <button
        onClick={doDig}
        className="bg-yellow-300 text-black py-4 active:scale-95 font-semibold text-2xl"
      >
        BAGGERN
      </button>
    </div>
  );
}
