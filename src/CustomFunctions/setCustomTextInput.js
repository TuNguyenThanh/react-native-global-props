import { TextInput } from 'react-native'

export const setCustomTextInput = customProps => {
  const TextInputRender = TextInput.render
  const initialDefaultProps = TextInput.defaultProps
  TextInput.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  TextInput.render = function render(props: any, ref: any) {
    return TextInputRender.apply(this, [{ ...props, style: [customProps.style, props.style] }, ref])
  }
}
