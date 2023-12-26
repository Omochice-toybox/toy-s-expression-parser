type State = {
  isInQuote: boolean;
  chunk: string;
  index: number;
  quote?: '"' | "'";
};
export function parse(expr: string): string[] {
  const result: string[] = [];
  const state: State = {
    isInQuote: false,
    chunk: "",
    index: 0,
  };
  // NOTE: start is "("
  const trimed = expr.trimStart().substring(1);
  while (true) {
    const char = trimed[state.index];
    state.index += 1;
    if (char === undefined) {
      throw new Error("out of inde");
    }
    if (!state.isInQuote && char === ")") {
      break;
    }
    if (/["']/.test(char)) {
      state.isInQuote = !state.isInQuote;
      if (!state.isInQuote) {
        result.push(state.chunk);
        state.chunk = "";
      }
      continue;
    }
    if (state.isInQuote) {
      state.chunk += char;
    }
  }
  return result;
}
