import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Article} from "../article/entities/article.entity";
import {Repository} from "typeorm";
import {CreateArticleDto} from "../article/dto/create-article.dto";
import {Comment} from "./entities/comment.entity";

@Injectable()
export class CommentService {

  constructor(
      @InjectRepository(Article)
              private articleRepository: Repository<Article>,@InjectRepository(Comment)
  private commentRepository: Repository<Comment>) { }


  // create(createArticleDto: CreateArticleDto) {
  //   const newArticle = this.articleRepository.create({...createArticleDto});
  //   return this.articleRepository.save(newArticle);
  // }
  async create(createCommentDto: CreateCommentDto) {
    const id = createCommentDto.articleId;
    const article=await this.articleRepository.findOne({
      where: {
        id
      }
    });
    const cmt = new Comment();
    cmt.article = article;
    const newComment = this.commentRepository.create(cmt);
    return 'created!';
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }

  async findByArticle(id: number) {
    const article=await this.articleRepository.findOne({
      where: {
        id
      }
    });
    return this.commentRepository.find({
      where: {
        article
      }
    });
  }
}
