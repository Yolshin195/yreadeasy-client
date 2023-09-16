import { ArticleElement } from './article-elements'


export interface Article {
    id: string
    title: string
    source_link?: string
    article_elements_len?: Number
    article_elements?: ArticleElement[]
}
