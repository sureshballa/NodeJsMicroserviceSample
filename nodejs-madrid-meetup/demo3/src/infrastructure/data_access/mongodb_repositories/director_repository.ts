import { injectable } from "inversify";
import { Document } from "mongoose";
import { DbClient } from "../db_client";
import { dbClient } from "../../../domain/constants/decorators";
import { GenericMongoDBRepository } from "./generic_repository";
import { Director } from "../../../domain/model/director";
import { DirectorRepository as DirectorRepositoryInterface } from "../../../domain/interfaces/repositories";

export interface DirectorModel extends Director, Document {}

@injectable()
export class DirectorRepository
    extends GenericMongoDBRepository<Director, DirectorModel>
    implements DirectorRepositoryInterface {

        public constructor(
            @dbClient dbClient: DbClient
        ) {
            super(
                dbClient,
                "Directors",
                {
                    name: String,
                    yearBorn: Number,
                    nationality: String,
                    movies: [String]
                }
            );
        }

}
