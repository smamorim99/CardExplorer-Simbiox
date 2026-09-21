export interface IPopularCardsName{
    name: string;
}

export interface IPopularCards {
    cards: IPopularCardsName[];
    onSelect: (cardName: string) => void;
}