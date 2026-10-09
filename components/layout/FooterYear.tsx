"use client";

import { useSyncExternalStore } from "react";

const renderedYear = new Date().getFullYear();

function subscribe() {
  return () => {};
}

function getCurrentYear() {
  return new Date().getFullYear();
}

function getRenderedYear() {
  return renderedYear;
}

export default function FooterYear() {
  const year = useSyncExternalStore(subscribe, getCurrentYear, getRenderedYear);
  return <span>{year}</span>;
}
