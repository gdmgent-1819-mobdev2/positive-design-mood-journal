import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Text from './FiraText';
import { LinearGradient } from 'expo';
import Colors from '../modules/Colors';

export class MoodCard extends Component {
	render() {
		return (
            <TouchableWithoutFeedback>
				<LinearGradient style={styles.card} 
					colors={[Colors.gradOrange1, Colors.gradOrange2]}
					start={[1, 0]}
					end={[0, 1]}
				>
					<Text weight='bold' style={styles.cardTitle}>Op Reis</Text>
					<Text style={styles.cardBody}>Leuke dingen gedaan vandaag</Text>
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

export default MoodCard;
