import { Controller, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { UrlService } from "./url.service";
import { isUri } from "valid-url";
import { Response } from "express";
import { nanoid } from "nanoid";
import { ProcessUrlDto } from "./dto/processUrlDto";

@Controller("url")
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post("encode")
  async encode(
    @Body() url: ProcessUrlDto,
    @Res() res: Response,
  ): Promise<Response> {
    url.urlCode = nanoid();
    console.log(url);
    if (isUri(url.longUrl)) {
      try {
        const existingUrl = await this.urlService.findExistingURL(url.longUrl);
        if (existingUrl) {
          return res.json(existingUrl);
        } else {
          url.shortUrl = `${process.env.BASE}/${url.urlCode}`;
          const urlObj = await this.urlService.saveUrl(url);
          return res.json(urlObj);
        }
      } catch (error) {
        return res.status(HttpStatus.SERVICE_UNAVAILABLE).json(error.message);
      }
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json("Invalid URL!");
    }
  }
}
