// view your journal entries
//  searchbar
//  latest entries

import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	TextInput,
	Button,
	StyleSheet,
	Picker,
	TouchableOpacity,
	Text,
	View,
	Header
} from 'react-native';
import Colors from '../modules/Colors';

import CurrentMood from '../components/CurrentMood';
import { bold } from 'ansi-colors';

export default class JournalEntries extends Component {
	constructor(props) {
		super(props);

		this.state = {
			feelintTitle: '',
			feelingText: ''
		};
	}
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				{/* FIX ME here needs to come a header! */}
				{/* input field for the title of your mood*/}
				<TextInput
					style={styles.title}
					placeholder="Enter a title"
					onChangeText={feelintTitle => this.setState({ feelintTitle })}
				/>
				{/* input field for the message of your mood*/}
				<TextInput
					style={styles.text}
					placeholder="What's the matter?"
					multiline={true}
					onChangeText={feelingText => this.setState({ feelingText })}
				/>
				{/* button to save the message of the mood */}
				{/* FIX ME: needs to be a round button with a checkmark*/}
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Home')}
				>
					<Text style={{ textAlign: 'center' }}>Submit</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		height: 60,
		paddingLeft: 25,
		margin: 10,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light',
		fontSize: 28,
		fontWeight: 'bold'
	},
	text: {
		flex: 0.55,
		paddingLeft: 25,
		margin: 10,
		fontSize: 15,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light'
	},
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 10,
		backgroundColor: Colors.white
	}
});
