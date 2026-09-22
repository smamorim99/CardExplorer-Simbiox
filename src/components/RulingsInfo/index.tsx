import type { IRulings } from "./interface";

export const RulingInfo = ({
    card,
    rulings
}: IRulings) => {
    console.log(rulings)

    if (!rulings || rulings.length === 0) {
        return (
            <div className="w-full border border-white/20 rounded-lg bg-black/20 p-4  mx-auto">
                <div className="uppercase border-b p-3">
                    <p className="font-bold text-lg"> Notas e informções sobre {card} </p>
                </div>

                <div className="p-3 ">
                    <span>
                        Essa carta não possui notas ou infomações
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full border border-white/20 rounded-lg bg-black/20 p-4  mx-auto">
            <div className="uppercase border-b p-3">
                <p className="font-bold text-lg"> Notas e informções sobre {card} </p>
            </div>

            <div className="p-3 ">
                {rulings.map((info, index) => (
                    <div key={index}>
                        <span>
                            {info.comment}
                        </span>

                        <div className="mt-2 text-xs">
                            <span>Publicado: </span>{info.published_at}
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}