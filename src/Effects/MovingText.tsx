import { wrap } from "@motionone/utils";
import {
  useMotionValue,
  useAnimationFrame,
  useTransform,
  motion,
} from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  baseVelocity: number;
  children: React.ReactNode;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);

    if (baseX.get() < -100) {
      baseX.set(0);
    }
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <motion.div className="scroller" style={{ x }}>
      <span>{children} </span>
      <span>{children} </span>
      <span>{children} </span>
      <span>{children} </span>
    </motion.div>
  );
}

export default ParallaxText;
