"use client";

export default function Dig() {
  function doDig() {
    fetch("/api/dig", { method: "POST" });
  }
  return (
    <div>
      <button onClick={doDig}>dig</button>
    </div>
  );
}
