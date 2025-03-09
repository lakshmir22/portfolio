import { useEffect, useRef } from 'react';

type AnimationDirection = 'from-left' | 'from-right' | 'from-top' | 'from-bottom';

interface UseScrollAnimationProps {
  direction?: AnimationDirection;
  threshold?: number;
  delay?: number;
}

export const useScrollAnimation = ({
  direction = 'from-bottom',
  threshold = 0.1,
  delay = 0,
}: UseScrollAnimationProps = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.classList.add('animate-on-scroll', direction);
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [direction, threshold, delay]);

  return ref;
}; 