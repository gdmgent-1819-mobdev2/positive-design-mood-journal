import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';

import Colors from '../modules/Colors';
import Moods from '../modules/Moods';

import Text from './FiraText';

export default class MoodCard extends Component {
	render() {
		const { mood, title, body } = this.props;
		
		return (
            <TouchableWithoutFeedback>
				<LinearGradient style={styles.card} 
					colors={Moods[mood].color}
					start={[1, 0]}
					end={[0, 1]}
				>
					<Text weight='bold' style={styles.cardTitle}>{title}</Text>
					<Text style={styles.cardBody}>{body}</Text>
				</LinearGradient>
            </TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		padding: 16,
		marginBottom: 16,
		borderRadius: 16,
	},
	cardTitle: {
		color: '#fff',
		fontSize: 25,
		letterSpacing: 0.8,
	},
	cardBody: {
		color: '#fff',
		fontSize: 20,
	}
});
