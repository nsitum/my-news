import { useEffect, useState } from "react";

import { SEARCH_DEBOUNCE_MS } from "@/constants/ui";

function useDebounce<T>(value: T, delay = SEARCH_DEBOUNCE_MS) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
