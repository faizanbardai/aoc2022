export const getPriorityForCharacter = (char: string): number => {
  // if char is small a-z return 1 - 26
  // if char is capital A-Z return 27 - 52
  if (char.charCodeAt(0) >= 97) {
    return char.charCodeAt(0) - 96;
  } else {
    return char.charCodeAt(0) - 64 + 26;
  }
};
