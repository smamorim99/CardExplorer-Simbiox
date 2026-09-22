import axios from "axios";
import type { IScryfallRuling } from "./interface";


const API_URL = "https://api.scryfall.com";


export const GetCard = async (cardName: string) => {
    if (!cardName.trim()) return;

    try {

        const response = await axios.get(
            `${API_URL}/cards/named`,
            {
                params: {
                    exact:
                        cardName
                }
            }
        );

        return response.data

    } catch (error) {
        try {
            const fuzzyResponse = await axios.get(
                `${API_URL}/cards/named`,
                {
                    params: {
                        fuzzy:
                            cardName

                    }
                }

            )
            return fuzzyResponse.data

        } catch (error: any) {
            throw new Error("Carta não encontrada")
        }
    } 

}

export const GetCardRulings = async (rulings_uri: string) : Promise<IScryfallRuling[]> => {
    const response = await axios.get(rulings_uri)
    
    return response.data.data;
}

