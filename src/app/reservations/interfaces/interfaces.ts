export interface ReservationResponse {
    ok:            boolean;
    reservationes: Reservatione[];
}

export interface Reservatione {
    _id:       string;
    book:      Book;
    state:     string;
    user:      User;
    createdAt: Date;
    updatedAt: Date;
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

export interface User {
    _id:       string;
    name:      string;
    last_name: string;
    email:     string;
    password:  string;
    roles:     string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ReservationCreateResponse {
    ok:          boolean;
    reservation: ReservationC;
}

export interface ReservationC {
    book:      string;
    state:     string;
    user:      string;
    _id:       string;
    createdAt: Date;
    updatedAt: Date;
}

