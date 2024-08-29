"use client";

import * as Ably from "ably";
import { ABLY_API_KEY, ABLY_CHANEL_NAME } from "@/lib/constants";
import { AblyProvider, ChannelProvider } from "ably/react";

const ABLY_CLIENT = new Ably.Realtime({
  key: ABLY_API_KEY,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AblyProvider client={ABLY_CLIENT}>
      <ChannelProvider channelName={ABLY_CHANEL_NAME}>
        {children}
      </ChannelProvider>
    </AblyProvider>
  );
}
