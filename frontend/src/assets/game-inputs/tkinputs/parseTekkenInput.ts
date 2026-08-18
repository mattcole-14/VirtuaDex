export function normalizeTekkenInput(input: string): string {
  return input
    .replace(/\[|\]/g, "")
    .replace(/d\/f/gi, "df")
    .replace(/d\/b/gi, "db")
    .replace(/u\/f/gi, "uf")
    .replace(/u\/b/gi, "ub")
    .replace(/during rage/gi, "rage")
    .replace(/while standing/gi, "ws")
    .replace(/full crouch/gi, "fc")
    .replace(/while sidestepping/gi, "ss")
    .replace(/quarter-circle forward/gi, "qcf")
    .replace(/quarter-circle back/gi, "qcb")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenizeTekkenInput(input: string): string[] {
  const normalized = normalizeTekkenInput(input);

  const tokens = normalized
    .split(/(\d\+\d\+\d\+\d|\d\+\d|qcf|qcb|uf|ub|df|db|u|d|f|b|n|[1-4]|\+|,|\(|\)|~|\s+)/gi)
    .filter((token) => token.trim() !== "");

  const expandedTokens: string[] = [];

  for (const token of tokens) {
    const lower = token.toLowerCase();

    if (lower === "qcf") {
      expandedTokens.push("d", "df", "f");
    } else if (lower === "qcb") {
      expandedTokens.push("d", "db", "b");
    } else {
      expandedTokens.push(token);
    }
  }

  return expandedTokens;
}