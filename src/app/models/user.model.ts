import { MovieReview } from "./movie-review.model";

export interface User {
    id: string,
    name: string;
    email: string;
    password: string;
    reviews: MovieReview[];
}