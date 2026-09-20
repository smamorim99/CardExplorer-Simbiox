import { useState } from "react";
import type { CardFrameProps } from "./interface"

export const CardFrame = ({ border }: CardFrameProps) => {

    const [activeBorder, setBorder] = useState<boolean>(false);
    return (
        <div className="lg:my-auto my-10 mx-auto ">
            <div className={`rounded-lg md:max-w-[30rem] md:max-h-[90vh] w-[20rem] h-[60vh]  shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]  ${activeBorder
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