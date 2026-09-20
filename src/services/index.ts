import axios from "axios";

const API_URL = "https://api.scryfall.com";

export const autocomplete = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/cards/autocomplete?q=${encodeURIComponent(cardName)}`
        );

        return response.data;
    } catch (error: any) {
        throw new Error(`Erro ao buscar carta: ${error.message}`);
    }
}

const getCard = async (cardName: string) => {
    if(!cardName.trim()) return 

    setLoading(true);
    setError(null);
    setShowSuggestions(false);

    b
}