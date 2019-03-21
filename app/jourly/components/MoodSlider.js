import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './FiraText';
import { LinearGradient } from 'expo';
import Colors from '../modules/Colors';

export class MoodSlider extends Component {
	render() {
		return (
			<LinearGradient
				colors={[Colors.gradPurple1, Colors.gradPurple2]}
				style={styles.sliderContainer}
				start={[0, 0]}
				end={[1, 1]}
			/>
		);
	}
}

const styles = StyleSheet.create({
	sliderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MoodSlider;
