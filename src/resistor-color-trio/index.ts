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

const DELIMITERS = [
  { delimiter: 1_000_000_000, prefix: 'giga' },
  { delimiter: 1_000_000, prefix: 'mega' },
  { delimiter: 1_000, prefix: 'kilo' },
  { delimiter: 1, prefix: '' },
];

export function decodedResistorValue(colors: Array<string>): string {
  const a = COLORS.findIndex(c => c === colors[0]);
  const b = COLORS.findIndex(c => c === colors[1]);

  let zeros = COLORS.findIndex(c => c === colors[2]);
  let value = a * 10 + b;

  while (zeros > 0) {
    value *= 10;
    zeros--;
  }

  for (const d of DELIMITERS) {
    const ohms = value / d.delimiter;
    if (ohms >= 1) {
      return `${ohms} ${d.prefix}ohms`;
    }
  }

  return '0 ohms';
}
