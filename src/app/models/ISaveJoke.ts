export type priority = 'liked' | 'dislike';

export interface SaveJoke {
    id: string;
    domanda: string;
    risposta: string;
    status: priority;

}