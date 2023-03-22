import { Todo } from "./todo";

export interface User{
    name: string;
    quote: string;
    todos?: Todo[];
};