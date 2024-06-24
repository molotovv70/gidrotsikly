import { InputTypeHTMLAttribute } from '@vue/runtime-dom'
import { ButtonProps } from '@/types/components/ui/Button.ts'

type InputTypeAttribute = Extract<InputTypeHTMLAttribute, 'text' | 'email' >;

export type InputProps = {
  id?: number
  type: InputTypeAttribute
  button?: ButtonProps
  title?: string
  placeholder?: string
};