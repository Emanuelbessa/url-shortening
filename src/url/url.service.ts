import { Inject, Injectable } from "@nestjs/common";
import { ModelClass } from "objection";
import { Url } from "./models/url.model";
import { ProcessUrlDto } from "./dto/processUrlDto";

@Injectable()
export class UrlService {
  constructor(@Inject("Url") private modelClass: ModelClass<Url>) {}

  async saveUrl(url: ProcessUrlDto): Promise<Url> {
    return this.modelClass
      .query()
      .insert({
        urlCode: url.urlCode,
        longUrl: url.longUrl,
        shortUrl: url.shortUrl,
        created: new Date(),
      })
      .first();
  }

  async findExistingURL(url: string): Promise<Url> {
    return this.modelClass.query().where({ longUrl: url }).limit(1).first();
  }

  async findByCode(code: string): Promise<Url> {
    return this.modelClass.query().where({ urlCode: code }).limit(1).first();
  }
}
