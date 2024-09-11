import React from "react";
import type { SVGProps } from "react";

export function SendMessage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.71 9.387q.196.763.25 1.575a20 20 0 0 1 0 2.522c-.274 4.246-3.606 7.628-7.79 7.906a33 33 0 0 1-4.34 0a4.9 4.9 0 0 1-1.486-.34c-.512-.21-.768-.316-.899-.3c-.13.016-.319.155-.696.434c-.666.491-1.505.845-2.75.814c-.629-.015-.943-.023-1.084-.263s.034-.573.385-1.238c.487-.923.795-1.98.328-2.826c-.805-1.209-1.488-2.64-1.588-4.187a20 20 0 0 1 0-2.522c.274-4.246 3.606-7.628 7.79-7.906A32 32 0 0 1 11 3m.995 9.5h.01m3.986 0H16m-8 0h.009M22 4.5h-8m8 0c0-.7-1.994-2.008-2.5-2.5M22 4.5c0 .7-1.994 2.008-2.5 2.5"
        color="currentColor"
      ></path>
    </svg>
  );
}
