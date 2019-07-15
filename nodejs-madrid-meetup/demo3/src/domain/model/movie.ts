export interface Movie {
    uniqueId?: string;
    title: string;
    releaseYear: number;
    releaseMonth: number;
    releaseDay: number;
    summary: string;
    directors: string[];
    actors: string[];
}
