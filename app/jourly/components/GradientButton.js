import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import Text from '../components/FiraText';

import Colors from '../modules/Colors';

export default class GradientButton extends Component {
  render() {
    const { colors, startPos, endPos, text} = this.props;
    /* TODO: Make text container full width */ 
    return (
        <LinearGradient
            style={styles.btn}
            colors={colors}
            start={startPos}
            end={endPos}
        >
            <TouchableOpacity onPress={this.props.onPress}>
                <Text weight={'bold'}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
    btn: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		borderRadius: 75,
		justifyContent: 'center',
		alignItems: 'center'
    },
});