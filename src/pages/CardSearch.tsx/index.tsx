import { useEffect, useState } from "react";

import axios from "axios";
import { GetCard } from "../../services";
import { CardFrame } from "../../components/Card";


export const CardSearch = () => {


    const [searchTerm, setSearchTerm] = useState<string>("Black Lotus")
    const [showSuggestions, setShowSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const [card, setCard] = useState<any>(null)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            setLoading(true)

            const data = await GetCard(searchTerm)

            setCard(data)


        } catch(error: any) {

        }
    };

    useEffect(() => {
        GetCard("Black Lotus");
    }, []);

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (searchTerm.length > 2) {
                try {
                    const response = await axios.get(
                        `https://api.scryfall.com/cards/autocomplete`,
                        {
                            params:{
                                q: searchTerm
                            }
                        }

                    );

                    setShowSuggestions(response.data.data || []);
                } catch (error) {
                    console.error("Erro ao buscar sugestões:", error);
                }
            } else {
                setShowSuggestions([]);
            }
        }, 250);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    return (
        <div className="md:flex md:flex-col lg:grid lg:grid-cols-2   ">


            <div className="lg:my-auto my-10 mx-auto">

                <CardFrame
                    cards={card}
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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