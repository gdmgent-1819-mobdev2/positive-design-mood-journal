import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { Svg } from 'react-native-svg';
import Text from './FiraText';

import Colors from '../modules/Colors';

export default class CurrentMood extends Component {
	state = {
		moodRating: 0
	};
	getMood(rating) {
		return moods[rating];
	}
	setNativeProps = props => {
		this._component && this._component.setNativeProps(props);
	};
	render() {
		return (
			<LinearGradient
				colors={[Colors.gradPurple1, Colors.gradPurple2]}
				style={styles.currentMoodContainer}
				start={[0, 0]}
				end={[1, 1]}
			>
				<Text>Current Mood</Text>
				<Text>{this.state.moodRating}</Text>
				{/* TODO: add animated svg */}
				<Svg style={styles.emoticon}>
					<Svg.Circle cx={50} cy={50} r={45} fill={Colors.white} />
				</Svg>
				<Text style={styles.text}>Home</Text>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	currentMoodContainer: {
		flex: 0.5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	currentMoodImage: {
		justifyContent: 'center',
		alignContent: 'center'
	},
	emoticon: {
		width: 100,
		height: 100
	}
});
