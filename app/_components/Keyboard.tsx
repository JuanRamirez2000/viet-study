"use client";

import { ChangeEvent, KeyboardEvent, useState } from "react";
import translations from "@/app/data/telexRules";

export default function Keyboard() {
  const [activeKeys, setActiveKeys] = useState([""]);
  const [inputString, setInputString] = useState("");
  const parseInput = (input: string): string => {
    if (input.length === 1) {
      return input;
    }

    const lastTwoChar = input.slice(-2);
    const translated = translations.find(
      (translation) => lastTwoChar === translation.eng
    );
    if (translated) {
      const finalString = input.slice(0, -2) + translated.viet;
      return finalString;
    }

    return input;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const parsedValue = parseInput(e.target.value);
    setInputString(parsedValue);
  };

  const logKeyCapture = (e: KeyboardEvent) => {
    if (e.code === "Space") setActiveKeys((prev) => [...prev, "space"]);
    if (e.key === "Enter") setInputString("");
    setActiveKeys((prev) => [...prev, e.key.toLowerCase()]);
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
    <section className="max-w-2xl ">
      <input
        type="text"
        onKeyDown={logKeyCapture}
        onKeyUp={removeKeyCapture}
        value={inputString}
        onChange={handleChange}
        className="w-full my-8 text-6xl rounded-lg bg-slate-600 ring-2 ring-sky-400 caret-sky-400 px-4 py-4"
      />
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
          className={`kbd-key w-24 ${
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
          className={`kbd-key w-full ${
            activeKeys.includes("space") ? "kbd-key-active" : ""
          }`}
        >
          Space
        </kbd>
      </div>
    </section>
  );
}
