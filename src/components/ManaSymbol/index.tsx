import { SYMBOL_COLORS, type SymbolColor } from "./function";
import type { IManaSymbol } from "./interface";

export const ManaSymbol = ({ symbol }: IManaSymbol) => {

    const cleanSymbol = symbol.replace(/[{}]/g, "").toUpperCase();

    const colorClass = SYMBOL_COLORS[cleanSymbol as SymbolColor] ?? "bg-zinc-200 text-zinc-800 border-zinc-400";

    return (
        <span
            className={`
                inline-flex
                items-center
                justify-center
                w-5 h-5
                md:w-6 md:h-6
                rounded-full
                text-[10px]
                md:text-xs
                font-bold
                border
                shadow-inner
                transition-transform
                hover:scale-110
                ${colorClass}`
            }
        >
            {cleanSymbol}
        </span>
    )
}