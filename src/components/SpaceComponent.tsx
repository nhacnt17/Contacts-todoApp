import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    height?: number
    width?: number
}

const SpaceComponent = (props: Props) => {

    const { height, width } = props
    return (
        <View
            style={{
                height: height,
                width: width,
            }}
        />
    )
}

export default SpaceComponent