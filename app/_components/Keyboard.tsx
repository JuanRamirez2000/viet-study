"use client";

import { KeyboardEvent, useState } from "react";

export default function Keyboard() {
  const [activeKeys, setActiveKeys] = useState("");

  const logKeyCapture = (e: KeyboardEvent) => {
    setActiveKeys(e.key.toLowerCase());
    if (e.code === "Space") setActiveKeys("space");
  };

  const removeKeyCapture = (e: KeyboardEvent) => {
    setTimeout(() => {
      setActiveKeys("");
    }, 500);
  };

  return (
    <section>
      <input type="text" onKeyDown={logKeyCapture} onKeyUp={removeKeyCapture} />
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${activeKeys === "1" ? "kbd-key-active" : ""}`}
        >
          1
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "2" ? "kbd-key-active" : ""}`}
        >
          2
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "3" ? "kbd-key-active" : ""}`}
        >
          3
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "4" ? "kbd-key-active" : ""}`}
        >
          4
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "5" ? "kbd-key-active" : ""}`}
        >
          5
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "6" ? "kbd-key-active" : ""}`}
        >
          6
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "7" ? "kbd-key-active" : ""}`}
        >
          7
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "8" ? "kbd-key-active" : ""}`}
        >
          8
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "9" ? "kbd-key-active" : ""}`}
        >
          9
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "0" ? "kbd-key-active" : ""}`}
        >
          0
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys === "backspace" ? "kbd-key-active" : ""
          }`}
        >
          backspace
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${activeKeys === "q" ? "kbd-key-active" : ""}`}
        >
          q
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "w" ? "kbd-key-active" : ""}`}
        >
          w
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "e" ? "kbd-key-active" : ""}`}
        >
          e
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "r" ? "kbd-key-active" : ""}`}
        >
          r
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "t" ? "kbd-key-active" : ""}`}
        >
          t
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "y" ? "kbd-key-active" : ""}`}
        >
          y
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "u" ? "kbd-key-active" : ""}`}
        >
          u
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "i" ? "kbd-key-active" : ""}`}
        >
          i
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "o" ? "kbd-key-active" : ""}`}
        >
          o
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "p" ? "kbd-key-active" : ""}`}
        >
          p
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${activeKeys === "a" ? "kbd-key-active" : ""}`}
        >
          a
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "s" ? "kbd-key-active" : ""}`}
        >
          s
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "d" ? "kbd-key-active" : ""}`}
        >
          d
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "f" ? "kbd-key-active" : ""}`}
        >
          f
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "g" ? "kbd-key-active" : ""}`}
        >
          g
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "h" ? "kbd-key-active" : ""}`}
        >
          h
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "j" ? "kbd-key-active" : ""}`}
        >
          j
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "k" ? "kbd-key-active" : ""}`}
        >
          k
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "l" ? "kbd-key-active" : ""}`}
        >
          l
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys === "enter" ? "kbd-key-active" : ""
          }`}
        >
          enter
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${
            activeKeys === "shift" ? "kbd-key-active" : ""
          }`}
        >
          shift
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "z" ? "kbd-key-active" : ""}`}
        >
          z
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "x" ? "kbd-key-active" : ""}`}
        >
          x
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "c" ? "kbd-key-active" : ""}`}
        >
          c
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "v" ? "kbd-key-active" : ""}`}
        >
          v
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "b" ? "kbd-key-active" : ""}`}
        >
          b
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "n" ? "kbd-key-active" : ""}`}
        >
          n
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "m" ? "kbd-key-active" : ""}`}
        >
          m
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "," ? "kbd-key-active" : ""}`}
        >
          ,
        </kbd>
        <kbd
          className={`kbd-key ${activeKeys === "." ? "kbd-key-active" : ""}`}
        >
          .
        </kbd>
        <kbd
          className={`kbd-key ${
            activeKeys === "shift" ? "kbd-key-active" : ""
          }`}
        >
          shift
        </kbd>
      </div>
      <div className="kbd-row">
        <kbd
          className={`kbd-key ${
            activeKeys === "space" ? "kbd-key-active" : ""
          }`}
        >
          Space
        </kbd>
      </div>
    </section>
  );
}
