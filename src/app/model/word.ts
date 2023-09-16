import { Reference } from './reference'
import { TranslationWord } from './translation-word'


export interface Word {
    id: string
    value: string
    description?: string
    example_use?: string
    transcription?: string
    part_of_speech: Reference
    language: Reference
    translation: TranslationWord[]
}
