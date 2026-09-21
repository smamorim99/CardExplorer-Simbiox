import axios from "axios";


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