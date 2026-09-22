import type { IScryfallCard } from "../../services/interface";

export interface CardFrameProps {
    card: IScryfallCard  | null;
    onDetails?: () => void;
}