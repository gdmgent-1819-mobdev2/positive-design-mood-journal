import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../modules/Colors'

export default class IconButton extends Component {
  render() {
    const { icon, size, color, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
            colors={Colors.gradientGreen}
            startPos={[0, 1]}
            endPos={[1, 0]}
            style={[styles.iconButton, {width: size * 2, height: size * 2}]}
        >
            <Ionicons name={icon} size={size} color={color} />
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  iconButton: {
    marginHorizontal: 8,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
})