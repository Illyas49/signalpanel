import { useEffect, useState } from 'react';

export function useAnimatedNumber(target: number, duration: number = 2000) {
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animate = () => {
    if (hasAnimated) return;

    setHasAnimated(true);
    const startTime = performance.now();
    const startValue = 0;

    const updateNumber = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const newValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCurrent(newValue);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(updateNumber);
  };

  return { current, animate };
}
