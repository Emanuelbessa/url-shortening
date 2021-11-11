import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './url/url.module';
import { UrlSchema } from './url/schemas/urlSchema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'urls', schema: UrlSchema }]),
    UrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
