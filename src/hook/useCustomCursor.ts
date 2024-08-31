import { useEffect, useRef } from "react";

function useCustomCursor(cursorStyle: string): React.RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;

    const handleMouseEnter = () => {
      if (element) {
        element.style.cursor = cursorStyle;
      }
    };

    const handleMouseLeave = () => {
      if (element) {
        element.style.cursor = "";
      }
    };

    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [cursorStyle]);

  return ref;
}

export default useCustomCursor;
