import { useEffect, useState } from "react";

import axios from "axios";
import { GetCard } from "../../services";

import { Header } from "../../components/Header";
import { CardFrame } from "../../components/CardFrame";
import { PopularCardsRow } from "../../components/PopularCardsRow";
import { POPULAR_CARDS } from "../../components/PopularCardsRow/functions";


export const CardSearch = () => {


    const [searchTerm, setSearchTerm] = useState<string>("")
    const [showSuggestions, setShowSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const [card, setCard] = useState<any>(null)
    const defaultCard = "Black Lotus"


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true)

            const data = await GetCard(searchTerm)

            setCard(data)


        } catch (error: any) {

        }
    };

    const handlePopularCard = async (cardName: string) => {
        const data = await GetCard(cardName)
        setCard(data)
    }

    useEffect(() => {
        const getDefaultCard = async () => {
            try {
                setLoading(true)

                const data = await GetCard(defaultCard)
                setCard(data)
            } catch (error) {
                console.error("Erro ao carregar carta padrão:", error);
                setError("Não foi possível carregar a carta padrão.")
                setLoading(false)
            }
        };
        getDefaultCard()
    }, []);

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (searchTerm.length > 2) {
                try {
                    const response = await axios.get(
                        `https://api.scryfall.com/cards/autocomplete`,
                        {
                            params: {
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
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex justify-center px-6 lg:mt-8">
                <div className="w-full max-w-6xl grid lg:grid-cols-[0.8fr_1.6fr] gap-10 items-start">
                    <div className="flex justify-center">
                        <CardFrame
                            cards={card}
                        />
                    </div>

                    <div className="flex flex-col gap-5">

                        <div className="bg-white/10 p-4 rounded-2xl w-full h-fit">

                            <div className=" p-3 border-b text-lg font-bold  ">
                                <span>Cartas Mais Procuradas</span>
                            </div>

                            <div className="p-2">
                                <PopularCardsRow
                                    cards={POPULAR_CARDS}
                                    onSelect={handlePopularCard}
                                />
                            </div>
                        </div>


                        <div className="bg-white/10 p-4 rounded-2xl w-full h-fit">

                            <div className=" p-3 border-b text-lg font-bold  ">
                                <span>Pesquisar Cartas</span>

                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3">
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
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}