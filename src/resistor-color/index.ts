export const colorCode = (color: string): number => {
  for (let i = 0; i < COLORS.length; i++) {
    if (COLORS[i] === color) {
      return i;
    }
  }
  throw new Error(`given color "${color} doesn't exist"`);
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
