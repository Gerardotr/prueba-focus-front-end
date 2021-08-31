export interface BooksResponse {
    ok:     boolean;
    pagina: number;
    books:  Book[];
}

export interface CreateBookResponse {
    ok:   boolean;
    book: Book;
}
export interface Book {
    _id:       string;
    title:     string;
    author:    string;
    published: string;
    genre:     string;
    stock:     number;
    createdAt: Date;
    updatedAt: Date;
}




