import { useEffect } from "react";

type Hotkey = {
  keys: string[]; // Combinação de teclas, ex: ["Meta", "k"]
  callback: () => void; // Função a ser executada ao disparar o hotkey
};

export const useHotkeys = (hotkeys: Hotkey[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      hotkeys.forEach(({ keys, callback }) => {
        // Verifica se todas as teclas da combinação estão pressionadas
        const allKeysPressed = keys.every((key) => {
          if (key === "Meta") return event.metaKey; // Cmd no macOS
          if (key === "Control") return event.ctrlKey; // Ctrl no Windows/Linux
          if (key === "Shift") return event.shiftKey;
          if (key === "Alt") return event.altKey;
          return event.key.toLowerCase() === key.toLowerCase(); // Checa a tecla padrão
        });

        if (allKeysPressed) {
          event.preventDefault(); // Evita o comportamento padrão do navegador
          callback();
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hotkeys]);
};
