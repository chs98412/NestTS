import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Comment} from "./entities/comment.entity";
import {Article} from "../article/entities/article.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Comment,Article])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
