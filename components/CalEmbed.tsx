"use client";

import { useEffect } from "react";
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/config";

interface CalFunction {
  (...args: unknown[]): void;
  q?: unknown[];
}

interface CalApi extends CalFunction {
  loaded?: boolean;
  ns?: Record<string, CalFunction>;
  q?: unknown[];
  config?: Record<string, unknown>;
}

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

/**
 * Cal.com embed loader providing:
 * 1. Full-width inline calendar embed (#my-cal-inline-helios-customer-operations)
 * 2. Floating action booking button
 * 3. Pop-up booking modal via element click ([data-cal-link])
 */
export default function CalEmbed() {
  useEffect(() => {
    (function (win: Window, scriptUrl: string, initArg: string) {
      const queuePush = function (apiFn: { q?: unknown[] }, args: IArguments) {
        if (!apiFn.q) apiFn.q = [];
        apiFn.q.push(args);
      };
      const doc = win.document;
      win.Cal =
        win.Cal ||
        function () {
          const cal = win.Cal as CalApi;
          const args = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = doc.createElement("script");
            script.src = scriptUrl;
            doc.head.appendChild(script);
            cal.loaded = true;
          }
          if (args[0] === initArg) {
            const api: CalFunction & { q?: unknown[] } = function () {
              queuePush(api, arguments);
            };
            const namespace = args[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              if (!cal.ns) cal.ns = {};
              cal.ns[namespace] = cal.ns[namespace] || api;
              queuePush(cal.ns[namespace], args);
              queuePush(cal, ["initNamespace", namespace] as unknown as IArguments);
            } else {
              queuePush(cal, args);
            }
            return;
          }
          queuePush(cal, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const cal = window.Cal;
    if (!cal) return;

    cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });
    cal.config = cal.config || {};
    cal.config.forwardQueryParams = true;

    const ns = cal.ns?.[CAL_NAMESPACE];
    if (ns) {
      ns("inline", {
        elementOrSelector: "#my-cal-inline-helios-customer-operations",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: CAL_LINK,
      });
      if (!document.querySelector("cal-floating-button")) {
        ns("floatingButton", {
          calLink: CAL_LINK,
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
          buttonText: "Book Discovery Call",
          buttonColor: "#0f172a",
          buttonTextColor: "#ffffff",
        });
      }
    }
  }, []);

  return (
    <div
      id="my-cal-inline-helios-customer-operations"
      style={{ width: "100%", height: "100%", minHeight: "750px", overflow: "scroll" }}
    />
  );
}
