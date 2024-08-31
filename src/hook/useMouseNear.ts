import { useEffect, useState } from "react";

function useMouseNear<T extends HTMLElement>(
  ref: React.RefObject<T>,
  radius: number = 100
): boolean {
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = event;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      // Calcular o centro do elemento
      const elementCenterX = left + width / 2;
      const elementCenterY = top + height / 2;

      // Calcular a distância euclidiana entre o mouse e o centro do elemento
      const distanceToMouse = Math.sqrt(
        Math.pow(clientX - elementCenterX, 2) +
          Math.pow(clientY - elementCenterY, 2)
      );

      // Verificar se a distância está dentro do raio definido
      const isMouseNear = distanceToMouse <= radius;

      // Atualizar o estado somente se o valor mudou
      if (isMouseNear !== isNear) {
        setIsNear(isMouseNear);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref, radius, isNear]);

  return isNear;
}

export default useMouseNear;
