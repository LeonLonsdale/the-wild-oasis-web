"use client";

import { TextExpanderProps } from "@/_lib/types";
import { useState } from "react";

function TextExpander({ numWords, children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children || typeof children !== "string") return null;

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, numWords).join(" ") + "...";

  return (
    <span>
      {displayText} <br />
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
