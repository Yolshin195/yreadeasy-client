import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './component/main/main.component';
import { ArticleViewComponent } from './component/article/article-view/article-view.component';
import { ArticleComponent } from './component/article/article.component';
import { ArticleCreateComponent } from './component/article/article-create/article-create.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'article/create', component: ArticleCreateComponent},
  {path: 'article/:id', component: ArticleViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
