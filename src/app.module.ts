import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DbModule } from "./config/db/db.module";
import { UrlModule } from "./url/url.module";

@Module({
  imports: [DbModule, UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
