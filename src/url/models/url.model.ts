import { Model } from 'objection';

export class Character extends Model {
  static tableName = 'url';

  urlCode: string;
  longUrl: string;
  shortUrl: string;
  created: Date;
}
