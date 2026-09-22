import { useEffect, useState } from "react";

import axios from "axios";
import { GetCard } from "../../services";

import { Header } from "../../components/Header";
import { CardFrame } from "../../components/CardFrame";
import { PopularCardsRow } from "../../components/PopularCardsRow";
import { POPULAR_CARDS } from "../../components/PopularCardsRow/functions";
import { useNavigate } from "react-router";


export const CardSearch = () => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [showSuggestions, setShowSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const [card, setCard] = useState<any>(null)
    const defaultCard = "Black Lotus"


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("BOTÃO FUNCIONOU");
        console.log("Carta pesquisada:", searchTerm);
        try {
            setLoading(true)
            setError("");

            const data = await GetCard(searchTerm)

            setCard(data)
            setShowSuggestions([]);


        } catch (error: any) {
            console.error("Erro ao buscar carta:", error);
            setError("Não foi possível encontrar essa carta.");
        } finally {
            setLoading(false)
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
            } finally {
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
            <Header
                title="Explore o universo de Magic: The Gathering"
            />
            <div className="flex-1 flex justify-center px-6 lg:mt-8">
                <div className="w-full max-w-6xl grid lg:grid-cols-[0.8fr_1.6fr] gap-10 items-start">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <CardFrame
                            card={card}
                        />
                        
                        <div>
                            <button
                                onClick={() => navigate(`/detail/${card.name}`)}
                                className="flex rounded-lg border border-white bg-black hover:bg-white/10 p-2"
                            >
                                Ver detalhes
                            </button>
                        </div>
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

                            <div className=" p-4 border-b text-lg font-bold  ">
                                <span>Pesquisar Cartas</span>

                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3">
                                <label
                                    htmlFor="card-name"
                                    className="text-gray-300 uppercase font-semibold">Nome da Carta</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="card-name"
                                        placeholder="Ex: Mago Negro"
                                        value={searchTerm}
                                        onChange={(e) => {setSearchTerm(e.target.value)
                                            setError("")
                                        }}
                                        className="w-full  p-3 rounded-lg  bg-black"
                                    />

                                    {error && (
                                        <p className="text-red-800 text-sm mt-1">
                                            {error}
                                        </p>
                                    )}

                                    {showSuggestions.length > 0 && (
                                        <div className="absolute z-50 w-full h-[20vh] overflow-y-auto mt-2 bg-black border border-white rounded-lg ">
                                            {showSuggestions.map((suggestion) => (
                                                <button
                                                    key={suggestion}
                                                    type="button"
                                                    onClick={() => {
                                                        setSearchTerm(suggestion)
                                                        setShowSuggestions([])
                                                    }}
                                                    className="w-full text-left px-4 py-3 hover:bg-white/10 transition"
                                                >
                                                    {suggestion}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button className="w-full bg-yellow-500 mt-1 hover:bg-yellow-600 p-4 rounded-lg"
                                    type="submit"
                                    disabled={loading}
                                >
                                    <span className="text-white font-bold">
                                        {loading
                                            ? "Procurando"
                                            : "Buscar no Grimório"
                                        }
                                    </span>
                                </button>
                            </form>
                        </div>

                        <div className="bg-white/10 p-1 rounded-2xl w-full h-fit">

                            <div className=" p-3  text-sm font-thin  ">
                                <p>Dados reais sincronizados via <span className="font-semibold">Scryfall API</span></p>
                            </div>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}