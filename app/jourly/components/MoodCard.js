import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Text from './FiraText';
import { LinearGradient } from 'expo';
import Colors from '../modules/Colors';

export default class MoodCard extends Component {
	render() {
		const { mood, title, body } = this.props;

		return (
            <TouchableWithoutFeedback>
				<LinearGradient style={styles.card} 
					colors={mood}
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
