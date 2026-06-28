import { useRef, useState } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef(null);

  const showToast = (type, message) => {
    setToast({ type, message });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const closeToast = () => {
    setToast(null);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return {
    toast,
    showToast,
    closeToast,
  };
}