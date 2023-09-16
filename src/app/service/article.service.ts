import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseHttpService } from './base-http.service'
import { Article } from '../model/article'


@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseHttpService<Article> {

  constructor(http: HttpClient) {
    super('/api/article', http);
  }
}
