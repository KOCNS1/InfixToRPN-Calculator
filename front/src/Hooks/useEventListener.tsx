import { ReactEventHandler, useEffect, useRef } from 'react';

// type UseEventListenerProps = {
//   eventName: string;
//   handler: ReactEventHandler;
//   element?: HTMLElement;
// };

export default function useEventListener(
  eventType: string,
  callback: ReactEventHandler,
  element = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
