"use client";

import { KeyboardEvent, useState } from "react";

export default function Keyboard() {
  const [activeKeys, setActiveKeys] = useState([""]);

  const logKeyCapture = (e: KeyboardEvent) => {
    setActiveKeys((prev) => [...prev, e.key.toLowerCase()]);
    if (e.code === "Space") setActiveKeys((prev) => [...prev, "space"]);
  };

  const removeKeyCapture = (e: KeyboardEvent) => {
    const firstInstanceIndex = activeKeys.findIndex(
      (letter) => letter === e.key
    );

    setTimeout(() => {
      setActiveKeys((prev) => prev.splice(firstInstanceIndex, 1));
    }, 300);
  };

  return (
    <section>
      <input type="text" onKeyDown={logKeyCapture} onKeyUp={removeKeyCapture} />
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${
            activeKeys.includes("1") ? "kbd-key-active" : ""
          }`}
        >
          1
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("2") ? "kbd-key-active" : ""
          }`}
        >
          2
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("3") ? "kbd-key-active" : ""
          }`}
        >
          3
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("4") ? "kbd-key-active" : ""
          }`}
        >
          4
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("5") ? "kbd-key-active" : ""
          }`}
        >
          5
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("6") ? "kbd-key-active" : ""
          }`}
        >
          6
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("7") ? "kbd-key-active" : ""
          }`}
        >
          7
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("8") ? "kbd-key-active" : ""
          }`}
        >
          8
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("9") ? "kbd-key-active" : ""
          }`}
        >
          9
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("0") ? "kbd-key-active" : ""
          }`}
        >
          0
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("backspace") ? "kbd-key-active" : ""
          }`}
        >
          backspace
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${
            activeKeys.includes("q") ? "kbd-key-active" : ""
          }`}
        >
          q
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("w") ? "kbd-key-active" : ""
          }`}
        >
          w
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("e") ? "kbd-key-active" : ""
          }`}
        >
          e
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("r") ? "kbd-key-active" : ""
          }`}
        >
          r
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("t") ? "kbd-key-active" : ""
          }`}
        >
          t
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("y") ? "kbd-key-active" : ""
          }`}
        >
          y
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("u") ? "kbd-key-active" : ""
          }`}
        >
          u
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("i") ? "kbd-key-active" : ""
          }`}
        >
          i
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("o") ? "kbd-key-active" : ""
          }`}
        >
          o
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("p") ? "kbd-key-active" : ""
          }`}
        >
          p
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${
            activeKeys.includes("a") ? "kbd-key-active" : ""
          }`}
        >
          a
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("s") ? "kbd-key-active" : ""
          }`}
        >
          s
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("d") ? "kbd-key-active" : ""
          }`}
        >
          d
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("f") ? "kbd-key-active" : ""
          }`}
        >
          f
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("g") ? "kbd-key-active" : ""
          }`}
        >
          g
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("h") ? "kbd-key-active" : ""
          }`}
        >
          h
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("j") ? "kbd-key-active" : ""
          }`}
        >
          j
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("k") ? "kbd-key-active" : ""
          }`}
        >
          k
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("l") ? "kbd-key-active" : ""
          }`}
        >
          l
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("enter") ? "kbd-key-active" : ""
          }`}
        >
          enter
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${
            activeKeys.includes("shift") ? "kbd-key-active" : ""
          }`}
        >
          shift
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("z") ? "kbd-key-active" : ""
          }`}
        >
          z
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("x") ? "kbd-key-active" : ""
          }`}
        >
          x
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("c") ? "kbd-key-active" : ""
          }`}
        >
          c
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("v") ? "kbd-key-active" : ""
          }`}
        >
          v
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("b") ? "kbd-key-active" : ""
          }`}
        >
          b
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("n") ? "kbd-key-active" : ""
          }`}
        >
          n
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("m") ? "kbd-key-active" : ""
          }`}
        >
          m
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes(",") ? "kbd-key-active" : ""
          }`}
        >
          ,
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes(".") ? "kbd-key-active" : ""
          }`}
        >
          .
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys.includes("shift") ? "kbd-key-active" : ""
          }`}
        >
          shift
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${
            activeKeys.includes("space") ? "kbd-key-active" : ""
          }`}
        >
          Space
        </kbd>
      </div>
    </section>
  );
}
