import { useState, useEffect } from "react";

const useIntersect = (ref, { root = null, rootMargin, threshold = 0 }) => {
  // State and setter for storing whether element is visible
  const [entry, setEntry] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setEntry(entry);
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return entry;
};

export default useIntersect;
