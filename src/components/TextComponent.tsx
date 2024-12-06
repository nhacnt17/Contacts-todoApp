import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyle'

interface Props {
    text: string
    color?: string
    styles?: StyleProp<TextStyle> 
    fontW?: "normal" | "bold"
    size?: number
    flex?: number
}

const TextComponent = (props : Props) => {
    const {color,styles,text,fontW, size,flex} = props
  return (
    <Text
    style={[
        {
            fontSize: size ? size : 16,
            fontWeight: fontW,
            color: color ? color : "#0067d0",
            flex: flex ?? 0,
        },
        styles
    ]}>
      {text}
    </Text>
  )
}

export default TextComponent