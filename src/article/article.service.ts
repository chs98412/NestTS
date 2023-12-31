import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {Article} from "./entities/article.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ArticleService {

  constructor(@InjectRepository(Article)
              private articleRepository: Repository<Article>) { }
  create(createArticleDto: CreateArticleDto) {
    const newArticle = this.articleRepository.create({...createArticleDto});
    return this.articleRepository.save(newArticle);
  }

  findAll() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
