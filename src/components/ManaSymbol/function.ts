export const SYMBOL_COLORS = {
    W: "bg-amber-100 text-amber-900 border-amber-300",
    U: "bg-blue-500 text-white border-blue-300",
    B: "bg-neutral-800 text-stone-200 border-neutral-600",
    R: "bg-red-600 text-white border-red-400",
    G: "bg-emerald-600 text-white border-emerald-400",
    C: "bg-stone-400 text-stone-900 border-stone-200",
    X: "bg-zinc-300 text-zinc-900 border-zinc-400",
    T: "bg-zinc-300 text-zinc-900 border-zinc-400",
};

export type SymbolColor = keyof typeof SYMBOL_COLORS;

export const getManaSymbols = (manaCost?: string): string[] => {
  if (!manaCost) return [];

  return manaCost.match(/\{[^}]+\}/g) ?? [];
}

export const parseOracleText = (text: string) => {
  return text.split(/(\{[^}]+\})/g)
}

export const getManaSymbolURL =  (symbol: string) => {
  const cleanSymbol = symbol.replace(/[{}]/g, "").toUpperCase();
  const encodedSymbol = encodeURIComponent(`{${cleanSymbol}}`)
  return `https://svgs.scryfall.io/card-symbols/${encodedSymbol}.svg`;

}
