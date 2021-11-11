import { Module, Global } from "@nestjs/common";
import Knex from "knex";
import { Model } from "objection";
import { Url } from "src/url/models/url.model";

const models = [Url];

const modelProviders = models.map((model) => ({
  provide: model.name,
  useValue: model,
}));

@Global()
@Module({
  providers: [
    ...modelProviders,
    {
      provide: "KnexConnection",
      useFactory: async () => {
        const knex = Knex({
          client: "mysql2",
          connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            connectTimeout: 60000,
          },
          pool: { min: 2, max: 10 },
        });

        Model.knex(knex);
        return knex;
      },
    },
  ],
  exports: [...modelProviders],
})
export class DbModule {}
