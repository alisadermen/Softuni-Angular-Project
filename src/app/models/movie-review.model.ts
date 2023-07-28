import { User } from "./user.model";

export interface MovieReview {
    id: string;
    author: User["name"];
    //authorId: User["id"];
    date: string;
    title: string;
    content: string;
    photo_url: string;
}