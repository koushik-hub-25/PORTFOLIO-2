import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useAnimation } from 'motion/react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 400 && !isVisible) {
        setIsVisible(true);
        controls.start({ opacity: 1, y: 0 });
      } else if (latest <= 400 && isVisible) {
        setIsVisible(false);
        controls.start({ opacity: 0, y: 20 });
      }
    });
  }, [scrollY, isVisible, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 bg-sidebar hover:bg-sidebar/90 text-white rounded-full shadow-xl transition-colors ${!isVisible && 'pointer-events-none'}`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
