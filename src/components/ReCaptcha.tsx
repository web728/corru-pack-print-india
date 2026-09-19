"use client";

/**
 * Reusable Google reCAPTCHA v2 ("I'm not a robot" checkbox) component.
 *
 * Usage:
 *   const recaptchaRef = useRef<ReCaptchaRef>(null);
 *   <ReCaptcha
 *     ref={recaptchaRef}
 *     siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
 *     onVerify={(token) => setToken(token)}
 *   />
 *   // on submit success/failure: recaptchaRef.current?.reset();
 */

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement | string,
        params: RecaptchaRenderParams,
      ) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
  }
}

interface RecaptchaRenderParams {
  sitekey: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  theme?: "light" | "dark";
  size?: "normal" | "compact";
}

export interface ReCaptchaRef {
  /** Reset the widget (clears the checkbox + token). Call this after submit success/failure. */
  reset: () => void;
  /** Read the current token manually, if needed. */
  getResponse: () => string;
}

interface ReCaptchaProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  theme?: "light" | "dark";
  size?: "normal" | "compact";
  className?: string;
}

const SCRIPT_ID = "recaptcha-v2-script";
let scriptLoadingPromise: Promise<void> | null = null;

function loadRecaptchaScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise((resolve, reject) => {
    if (document.getElementById(SCRIPT_ID)) {
      const check = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(check);
          resolve();
        }
      }, 100);
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    // render=explicit: hum khud .render() call karenge (React lifecycle ke saath safe)
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const waitReady = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(waitReady);
          resolve();
        }
      }, 50);
    };
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

const ReCaptcha = forwardRef<ReCaptchaRef, ReCaptchaProps>(
  ({ siteKey, onVerify, onExpire, theme = "light", size = "normal", className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
      let cancelled = false;
      loadRecaptchaScript()
        .then(() => {
          if (!cancelled) setScriptLoaded(true);
        })
        .catch((err) => console.error("reCAPTCHA load error:", err));
      return () => {
        cancelled = true;
      };
    }, []);

    useEffect(() => {
      if (!scriptLoaded || !containerRef.current || !window.grecaptcha) return;
      if (widgetIdRef.current !== null) return; // already rendered, avoid double-render in StrictMode

      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        size,
        callback: (token: string) => onVerify(token),
        "expired-callback": () => {
          onExpire?.();
          onVerify("");
        },
        "error-callback": () => {
          onVerify("");
        },
      });
    }, [scriptLoaded, siteKey, theme, size, onVerify, onExpire]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      },
      getResponse: () => {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          return window.grecaptcha.getResponse(widgetIdRef.current);
        }
        return "";
      },
    }));

    return <div ref={containerRef} className={className} />;
  },
);

ReCaptcha.displayName = "ReCaptcha";

export default ReCaptcha;