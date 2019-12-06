import {Component, EventEmitter, OnInit} from '@angular/core';
import {ArticleListService} from "../../../services/article/article-list.service";
import {Article} from "../../../services/data-types/article";
import {languages} from "../../../utils/constants";

@Component({
  selector: 'app-choose-article',
  templateUrl: './choose-article.component.html',
  styleUrls: ['./choose-article.component.less']
})
export class ChooseArticleComponent implements OnInit {
  articles: Article[];
  authArticles: Article[];
  languages = languages;
  closeOverlay = new EventEmitter();
  isAuthDoc: boolean = true;
  isAuthorized: boolean;
  constructor(private articleListService: ArticleListService) {
    this.articleListService.getArticleList().subscribe(
      data => {
        this.articles = data.articles;
        this.authArticles = data.authArticles;
        this.isAuthorized = data.authorized;
      }
    )
  }

  ngOnInit() {

  }

  close() {
    this.closeOverlay.emit('closeOverlay')
  }
}
