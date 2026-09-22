export interface IScryfallCard {
    id: string;
    name: string;
    mana_cost?: string;
    type_line: string;
    oracle_text?: string;

    colors: string[];
    color_identity: string[];

    set: string;
    set_name: string;
    collector_number: string;
    rarity: string;

    artist?: string;
    lang: string;
    released_at?: string;

    image_uris?: {
        small: string;
        normal: string;
        large: string;
        png: string;
        art_crop: string;
        border_crop: string;
    };

    power?: string;
    toughness?: string;

    legalities: Record<string, string>;

    prices: {
        usd: string | null;
        usd_foil: string | null;
        usd_etched: string | null;
        eur: string | null;
        eur_foil: string | null;
        tix: string | null;
    };

    rulings_uri?: string;
}

export interface IScryfallRuling {
    object: string;
    oracle_id: string;
    source: string;
    published_at: string;
    comment: string;

}

