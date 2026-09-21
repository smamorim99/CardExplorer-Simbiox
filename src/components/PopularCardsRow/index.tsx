import { useState } from "react";
import type { IPopularCards } from "./interface";

export const PopularCardsRow = ({ cards, onSelect }: IPopularCards) => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
        <div className="flex gap-3 py-2">

            {cards.map((card) => {
                const isSelected = selected === card.name;
                return (
                    < button
                        key={card.name}
                        type="button"
                        onClick={() => { onSelect(card.name); setSelected(card.name) }}
                        className={
                            `p-2 
                        rounded-lg
                        border
                        ${isSelected
                                ? "border-yellow-600/55 bg-yellow-600/30 text-yellow-600 "
                                : "bg-black border border-white/55 text-white/55 hover:border-white hover:text-white"
                            }`
                        }
                    >
                        {card.name}
                    </button>
                )
            })
            }
        </div >

    )

}