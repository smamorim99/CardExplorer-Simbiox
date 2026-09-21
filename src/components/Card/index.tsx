import { useState } from "react";
import { FRAME_COLORS, type FrameColor } from "./function.ts";
import type { CardFrameProps } from "./interface.ts";
import { getManaSymbols } from "../ManaSymbol/function.ts";
import { ManaSymbol } from "../ManaSymbol/index.tsx";


export const CardFrame = ({ cards }: CardFrameProps) => {
    if (!cards) {
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
        if (cards.type_line.includes("Artifact")) {
            return "A"
        }
        if (cards.colors.length === 0) {
            return "C"
        }
        if (cards.colors.length === 1) {
            return cards.colors[0] as FrameColor;
        }
        return "M"
    }
    const frame = FRAME_COLORS[getFremeColor()];

    const manaSymbol = getManaSymbols(cards.mana_cost);



    const [activeBorder, setBorder] = useState<boolean>(false);

    return (
        <div className="lg:my-auto my-10 mx-auto ">
            <div className={`flex flex-col gap-2 rounded-lg md:max-w-[30rem] md:max-h-[90vh] w-[22rem] h-[55vh] p-3 bg-gradient-to-br ${frame.bg} ${frame.border}` }>

                <div className="h-[8%]">
                    <div className={`
                        h-full
                        rounded-t-md
                        px-3
                        flex
                        items-center
                        justify-between
                        ${frame.header}`}>

                        <span>{cards.name}</span>

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

                <div>
                    <img src={cards.image_uris?.art_crop}
                        alt={cards.name}
                        className="
                            object-cover
                            rounded-md
                            transition-transform
                            duration-300
                            hover:scale-105"
                    />
                </div>

                <div className={`
                        h-[7%]
                        mt-2 
                        rounded-md
                        px-3
                        flex 
                        items-center
                        ${frame.textBg}`}
                    >
                        <span>
                            {cards.type_line}
                        </span>
                </div>

                <div className={`                    
                    h-[30%]
                    p-3
                    ${frame.textBg}
                    rounded-md
                `}>

                    <span>
                        {cards.oracle_text}
                    </span>

                </div>


            </div>

            <div>
                <button
                    onClick={() => setBorder(!activeBorder)}
                >
                    ativar borda
                </button>
            </div>
        </div>
    )
}