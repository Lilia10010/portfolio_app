import { useEffect } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (ref, threshold = 0.1) => {
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });

  return isInView;
};
