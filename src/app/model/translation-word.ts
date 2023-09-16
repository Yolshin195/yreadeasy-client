import { Reference } from './reference'


export interface TranslationWord {
    id: string
    value: string
    description?: string
    example_use?: string
    transcription?: string
    language: Reference
}
