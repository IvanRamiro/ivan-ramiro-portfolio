"use client";

import { useEffect, useState } from "react";

const TYPING_DELAY_MS = 90;
const DELETING_DELAY_MS = 40;
const PAUSE_ON_WORD_MS = 1500;

export default function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    if (!word) return;

    const isWordComplete = text === word;
    const isWordEmpty = text === "";

    let delay = isDeleting ? DELETING_DELAY_MS : TYPING_DELAY_MS;
    if (!isDeleting && isWordComplete) delay = PAUSE_ON_WORD_MS;

    const timer = setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
      } else if (isDeleting && isWordEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      } else {
        const nextLength = text.length + (isDeleting ? -1 : 1);
        setText(word.slice(0, nextLength));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return <>{text}</>;
}