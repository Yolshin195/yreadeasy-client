import { SentenceToken } from './sentence-token'


export interface Sentence {
    index: Number
    sentence_tokens_len: Number
    sentence_tokens: SentenceToken[]
}
