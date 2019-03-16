import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import Text from '../components/FiraText';

export default class GradientButton extends Component {
  render() {
    const { colors, startPos, endPos, text, onPress } = this.props;

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <LinearGradient
                style={styles.btnContainer}
                colors={colors}
                start={startPos}
                end={endPos}
            >
                <Text weight={'bold'}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    btnContainer: {
        height: 60,
        margin: 10,
        borderRadius: 75,
        justifyContent: 'center',
		alignItems: 'center',
    },
});