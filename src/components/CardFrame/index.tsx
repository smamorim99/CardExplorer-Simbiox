import { FRAME_COLORS, type FrameColor } from "./function.ts";
import type { CardFrameProps } from "./interface.ts";
import { getManaSymbols, parseOracleText } from "../ManaSymbol/function.ts";
import { ManaSymbol } from "../ManaSymbol/index.tsx";


export const CardFrame = ({ card }: CardFrameProps) => {
    if (!card) {
        return (
            <div>
                <div className="lg:my-auto my-10 mx-auto">
                    <div className="flex items-center justify-center w-[22rem] h-[60vh] rounded-lg bg-zinc-900 border border-zinc-700">
                        <span className="text-zinc-400">
                            Pesquise uma carta
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    const getFremeColor = (): FrameColor => {
        if (card.type_line.includes("Artifact")) {
            return "A"
        }
        if (card.colors.length === 0) {
            return "C"
        }
        if (card.colors.length === 1) {
            return card.colors[0] as FrameColor;
        }
        return "M"
    }
    const frame = FRAME_COLORS[getFremeColor()];

    const manaSymbol = getManaSymbols(card.mana_cost);

    return (
        <div className="relative lg:my-auto my-10 mx-auto ">

            <div className={`absolute inset-0 rounded-[24px] bg-gradient-to-b ${frame.bg} opacity-50 blur-lg transition duration-500 group-hover:opacity-80 ${frame.glow}`}></div>
            <div className="relative z-10 flex flex-col md:max-w-[30rem] md:max-h-[90vh] w-fit  h-fit p-3 rounded-2xl bg-neutral-900  shadow-2xl  items-center justify-center">


                <div className={`flex flex-col gap-2 rounded-lg md:max-w-[30rem] md:max-h-[90vh] w-[22rem] h-[55vh] p-3 bg-gradient-to-br ${frame.bg} border-5 border-black`}>
                    <div className="h-[8%]">
                        <div className={`h-full rounded-t-md px-3 flex items-center justify-between ${frame.header}`}>

                            <span>{card.name}</span>

                            <div className="flex items-center gap-1">
                                {manaSymbol.map((symbol, index) => (
                                    <ManaSymbol
                                        key={`${symbol}-${index}`}
                                        symbol={symbol}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className={`overflow-hidden rounded-md border ${frame.border}`}>
                        <img src={card.image_uris?.art_crop ?? ""}
                            alt={card.name}
                            className="
                            object-cover
                            rounded-md
                            transition-transform
                            duration-300
                            hover:scale-105"
                        />
                    </div>

                    <div className={`h-[7%] mt-2 rounded-md px-3 flex items-center ${frame.textBg}`}
                    >
                        <span>
                            {card.type_line}
                        </span>
                    </div>

                    <div className={`h-[30%] p-3 ${frame.textBg} rounded-md overflow-y-auto `}>
                        {parseOracleText(card?.oracle_text ?? "").map((part, index) => {
                            if (/^\{[^}]+\}$/.test(part)) {
                                return (
                                    <ManaSymbol
                                        key={index}
                                        symbol={part}
                                    />
                                );
                            }

                            return (
                                <span key={index}>
                                    {part}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}