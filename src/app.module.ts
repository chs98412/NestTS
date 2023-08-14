import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Article} from "./article/entities/article.entity";
import { CommentModule } from './comment/comment.module';
import {Comment} from "./comment/entities/comment.entity";


@Module({
  imports: [ArticleModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Chlgurtns98!',
    database: 'test',
    entities: [Article,Comment],
    synchronize: true,
  }), CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
