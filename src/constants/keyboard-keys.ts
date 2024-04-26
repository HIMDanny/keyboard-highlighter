const KEYBOARD_FIRST_ROW = [
  {
    code: "KeyQ",
    label: "q",
  },
  {
    code: "KeyW",
    label: "w",
  },
  {
    code: "KeyE",
    label: "e",
  },
  {
    code: "KeyR",
    label: "r",
  },
  {
    code: "KeyT",
    label: "t",
  },
  {
    code: "KeyY",
    label: "y",
  },
  {
    code: "KeyU",
    label: "u",
  },
  {
    code: "KeyI",
    label: "i",
  },
  {
    code: "KeyO",
    label: "o",
  },
  {
    code: "KeyP",
    label: "p",
  },
] as const;

const KEYBOARD_SECOND_ROW = [
  {
    code: "KeyA",
    label: "a",
  },
  {
    code: "KeyS",
    label: "s",
  },
  {
    code: "KeyD",
    label: "d",
  },
  {
    code: "KeyF",
    label: "f",
  },
  {
    code: "KeyG",
    label: "g",
  },
  {
    code: "KeyH",
    label: "h",
  },
  {
    code: "KeyJ",
    label: "j",
  },
  {
    code: "KeyK",
    label: "k",
  },
  {
    code: "KeyL",
    label: "l",
  },
] as const;

const KEYBOARD_THIRD_ROW = [
  {
    code: "KeyZ",
    label: "z",
  },
  {
    code: "KeyX",
    label: "x",
  },
  {
    code: "KeyC",
    label: "c",
  },
  {
    code: "KeyV",
    label: "v",
  },
  {
    code: "KeyB",
    label: "b",
  },
  {
    code: "KeyN",
    label: "n",
  },
  {
    code: "KeyM",
    label: "m",
  },
] as const;

const KEYBOARD_KEYS = [
  KEYBOARD_FIRST_ROW,
  KEYBOARD_SECOND_ROW,
  KEYBOARD_THIRD_ROW,
] as const;

export { KEYBOARD_KEYS };
