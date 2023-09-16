import { Word } from './word'


export interface SentenceToken {
    index: Number
    type: string
    value: string
    word?: Word
}
