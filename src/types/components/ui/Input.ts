import { InputTypeHTMLAttribute } from '@vue/runtime-dom'

type InputTypeAttribute = Extract<InputTypeHTMLAttribute, 'text' | 'email' >;

export type InputProps = {
  id?: number
  type: InputTypeAttribute
  button?: boolean
  title?: string
  placeholder?: string
};