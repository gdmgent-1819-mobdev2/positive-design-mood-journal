import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../modules/Colors';
import Moods from '../modules/Moods';

import Text from '../components/FiraText';
import MoodSlider from '../components/MoodSlider';

export default class NewJournalEntry extends Component {
	state = {
		rating: 0,
		currentMood: 0,
	}

	/* Set selected Mood Rating to Storage */
	async storeMoodRating() {
		try {
			await AsyncStorage.setItem('mood', JSON.stringify(this.state.rating));
			console.log('Mood set in storage.');
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<LinearGradient
					colors={Moods[this.state.rating].color}
					style={styles.sliderContainer}
					start={[0, 0]}
					end={[1, 1]}
				>
				<View style={styles.pageHeader}>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
						<Ionicons name={'md-arrow-back'} size={32} color={Colors.white} />
					</TouchableHighlight>
					<Text weight='bold' style={{ color: Colors.white, marginLeft: 20, fontSize: 24, textAlign: 'center' }}>How are you feeling today?</Text>
				</View>
					<MoodSlider 
						onChange={(value) => this.setState({ rating: value })} 
						onComplete={this.storeMoodRating.bind(this)}
						currentMood={this.state.currentMood} 
					/>
					<Text weight='bold' style={{ color: Colors.white }}>{Moods[this.state.rating].name}</Text>
					<TouchableOpacity 
						activeOpacity={0.8}
						style={styles.btnContainer}
						onPress={() => this.props.navigation.navigate('AddEntry')}
					>
						<Text weight='bold'>NEXT</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
	},
	sliderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
	btnContainer: {
		backgroundColor: Colors.white,
        height: 50,
		marginHorizontal: 16,
		marginTop: 32,
		marginBottom: 16,
		borderRadius: 75,
		alignSelf: 'stretch',
        justifyContent: 'center',
		alignItems: 'center',
	},
	pageHeader: {
		marginTop: 32,
		paddingLeft: 32,
		height: 70,
		alignSelf: 'stretch',
		flexDirection: 'row',
		alignItems: 'center',
	}
})