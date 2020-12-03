import { Text } from 'react-native'

export const setCustomText = customProps => {
  const TextRender = Text.render
  const initialDefaultProps = Text.defaultProps
  Text.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Text.render = function render(props: any, ref: any) {
    return TextRender.apply(this, [{ ...props, style: [customProps.style, props.style] }, ref])
  }
}
