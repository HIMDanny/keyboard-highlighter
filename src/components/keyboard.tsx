import { Kbd } from "./kbd";
import { KEYBOARD_KEYS } from "../constants/keyboard-keys";

type KeyboardProps = {
  highlightedKeys?: Set<string>;
};

const Keyboard = ({ highlightedKeys = new Set() }: KeyboardProps) => {
  const isShifted =
    highlightedKeys.has("ShiftLeft") || highlightedKeys.has("ShiftRight");

  return (
    <div className="space-y-1">
      {KEYBOARD_KEYS.map((row, rowIndex) => (
        <div className="flex w-full justify-center gap-1" key={rowIndex}>
          {row.map((key) => (
            <Kbd
              key={key.code}
              label={
                isShifted ? key.label.toUpperCase() : key.label.toLowerCase()
              }
              isHighlighted={highlightedKeys.has(key.code)}
            />
          ))}
        </div>
      ))}
      <div className="flex w-full justify-center gap-1">
        <Kbd
          label="Space"
          className="w-72"
          isHighlighted={highlightedKeys.has("Space")}
        />
      </div>
    </div>
  );
};

export { Keyboard };
