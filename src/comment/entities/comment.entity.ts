import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Article} from "../../article/entities/article.entity";


@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    body: string;
    @ManyToOne(type => Article)
    article: Article;

}
