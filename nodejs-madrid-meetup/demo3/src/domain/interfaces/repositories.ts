import { Actor } from "../model/actor";
import { Director } from "../model/director";
import { Movie } from "../model/movie";
import { Account } from "../model/account";
import { IRepository } from "../interfaces/repositories";

export type Query<T> = {
    [P in keyof T]?: T[P] | { $regex: RegExp };
};

export interface IRepository<T> {
    save(doc: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T>;
    findManyById(ids: string[]): Promise<T[]>;
    findManyByQuery(query?: Query<T>): Promise<T[]>;
}

export type MovieRepository = IRepository<Movie>;
export type ActorRepository = IRepository<Actor>;
export type DirectorRepository = IRepository<Director>;
export type AccountRepository = IRepository<Account>;
