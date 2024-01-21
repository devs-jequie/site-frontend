import React from "react";

export default function Badge({ text }: { text: string }) {
  return (
    <span className="absolute right-5 top-5 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
      {text}
    </span>
  );
}
