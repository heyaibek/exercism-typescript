const TRANSCRIPTIONS: { [key: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export function toRna(nucleotides: string): string {
  let result: Array<string> = [];
  for (const key of nucleotides) {
    const transcription = TRANSCRIPTIONS[key];
    if (!transcription) {
      throw new Error('Invalid input DNA.');
    }
    result.push(transcription);
  }
  return result.join('');
}
