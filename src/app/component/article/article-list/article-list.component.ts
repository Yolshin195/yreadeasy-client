import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {
  articleList: Article[] = []

  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    console.log("working!")
    this.articleService
    .findAll()
    .subscribe(articleList => this.articleList = articleList);
  }
}
