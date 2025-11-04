import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "call-us-selector": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
