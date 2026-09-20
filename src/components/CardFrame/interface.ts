export interface CardFrameProps {
    cards: {
        name: string;
        mana_cost?: string;
        type_line: string;
        oracle_text?: string;
        image_uris?: {
            normal: string;
        };
        colors: string[];
        set_name: string;
        artist: string;
    }
}