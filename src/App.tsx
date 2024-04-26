import { useEffect, useRef, useState } from "react";
import { Keyboard } from "./components/keyboard";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedKeys, setHighlightedKeys] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      inputRef?.current?.focus();

      setHighlightedKeys((prevHighlightedKeys) => {
        const newHighlightedKeys = new Set(prevHighlightedKeys);
        newHighlightedKeys.add(event.code);

        return newHighlightedKeys;
      });
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setHighlightedKeys((prevHighlightedKeys) => {
        const newHighlightedKeys = new Set(prevHighlightedKeys);
        newHighlightedKeys.delete(event.code);

        return newHighlightedKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="grid gap-10">
        <input
          ref={inputRef}
          className="min-h-9 text-center text-3xl font-bold focus:outline-none"
        />
        <Keyboard highlightedKeys={highlightedKeys} />
      </div>
    </main>
  );
};

export default App;
