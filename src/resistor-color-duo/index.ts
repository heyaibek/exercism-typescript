const COLORS = [
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

export function decodedValue(colors: Array<string>): number {
  return (
    COLORS.findIndex(c => c === colors[0]) * 10 +
    COLORS.findIndex(c => c === colors[1])
  );
}
