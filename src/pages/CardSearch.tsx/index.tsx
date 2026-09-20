import { useState } from "react";
import { CardFrame } from "../../components/CardFrame";


export const CardSearch = () => {

    const [cardName, setCardName] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(cardName);
    };

    return (
        <div className="md:flex md:flex-col lg:grid lg:grid-cols-2   ">


            <div className="lg:my-auto my-10 mx-auto">

                <CardFrame
                />

            </div>


            <div className="bg-white/10 p-4 rounded-2xl">

                <div className=" p-3 border-b text-lg font-bold  ">
                    <span>Pesquisar Cartas</span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6">
                    <span className="text-gray-300 uppercase font-semibold">Nome da Carta</span>
                    <input
                        type="text"
                        placeholder="Ex: Mago Negro"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full  p-5 rounded-lg  bg-black"
                    />

                    <button className="w-full bg-yellow-500 mt-1 hover:bg-yellow-600 py-3 px-4 rounded-lg"
                        type="submit"
                    >
                        <span className="text-white font-bold">Buscar no Grimório</span>

                    </button>
                </form>
            </div>
        </div>
    )
}