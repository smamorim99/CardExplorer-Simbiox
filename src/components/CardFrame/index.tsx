import { useState } from "react";
import { FRAME_COLORS } from "./function.ts";
import type { CardFrameProps } from "./interface.ts";


export const CardFrame = ({ cards }: CardFrameProps) => {
    
    
    const getFremeColor = () => {
        // if(!cardData) return frame.B;

        if(cards.type_line.includes("Artifact")){
            return "A"
        }
        if(cards.colors.length === 0){
            return "C"
        }
        if(cards.colors.length === 1){
            return "M"
        }
        return cards.colors[0]
    }

     const frame = FRAME_COLORS[getFremeColor()];

    const [activeBorder, setBorder] = useState<boolean>(false);
    return (
        <div className="lg:my-auto my-10 mx-auto ">
            <div className={`rounded-lg md:max-w-[30rem] md:max-h-[90vh] w-[20rem] h-[60vh] p-2 bg-gradient-to-br ${frame.bg} ${activeBorder
                 ? `border border-white` : ""}`}>

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