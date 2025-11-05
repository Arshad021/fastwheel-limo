"use client";

import { useEffect } from "react";

export default function CallUsSelector() {
  useEffect(() => {
    import("https://downloads.3cx.com/downloads/livechat/v1/callus.js");
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <call-us-selector
            phonesystem-url="https://fastwheels.ma.3cx.us"
            party="LiveChat457078"
          ></call-us-selector>
        `,
      }}
    />
  );
}
