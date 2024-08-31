import { CSSProperties, useEffect, useRef, useState } from "react";

// Hook para distorção com hover
function useHoverDistort<T extends HTMLElement>(): [
  React.RefObject<T>,
  CSSProperties
] {
  const ref = useRef<T>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = event;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      // Calcular a posição do mouse em relação ao centro do elemento
      const offsetX = ((clientX - left) / width) * 2 - 1; // De -1 a 1
      const offsetY = ((clientY - top) / height) * 2 - 1; // De -1 a 1

      // Deformar o elemento com base na posição do mouse
      const rotateX = offsetY * 15; // Rotação em torno do eixo X
      const rotateY = offsetX * -15; // Rotação em torno do eixo Y
      const scale = 1 + Math.max(Math.abs(offsetX), Math.abs(offsetY)) * 0.1; // Escala ligeiramente

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: "transform 0.1s ease-out",
      });
    };

    const handleMouseLeave = () => {
      // Resetar a transformação quando o mouse sair
      setStyle({
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.3s ease-out",
      });
    };

    const currentElement = ref.current;
    if (currentElement) {
      currentElement.addEventListener("mousemove", handleMouseMove);
      currentElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("mousemove", handleMouseMove);
        currentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return [ref, style];
}

export default useHoverDistort;
