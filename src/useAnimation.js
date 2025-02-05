import { useRef, useEffect, useCallback } from "react";

const useAnimationFrame = (callback) => {
  const animationRef = useRef();
  const animate = useCallback(() => {
    callback();
    animationRef.current = requestAnimationFrame(animate);
  }, [callback]);
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [animate]);
};

export default useAnimationFrame;
