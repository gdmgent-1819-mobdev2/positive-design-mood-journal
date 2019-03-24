// journal entry second screen
//  write a note for your journal entry
//  add image button
import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	TextInput,
	StyleSheet,
	AsyncStorage,
	TouchableHighlight,
	View
} from 'react-native';
import IconButton from '../components/IconButton';
import Text from '../components/FiraText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo';
import Colors from '../modules/Colors';
import Moods from '../modules/Moods';

import firebase from 'firebase';

export default class JournalNoteEntry extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			text: '',
			uid: null,
			currentMood: 0,
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.retrieveMoodRating();
				this.setState({ uid: user.uid })
			} 
		})
	}

	async retrieveMoodRating() {
		try {
			const rating = await AsyncStorage.getItem('mood');
			if (rating !== null) {
				console.log(rating);
				this.setState({ currentMood: rating })
				console.log('Current Mood: ', this.state.currentMood);
			}
		} catch (err) {
			console.log(err);
		}
	}


	/* TODO: Add mood to note data, so we can determine which type / color card it is */
	async addNewNote(note) {
		if (note.title === '' || note.text === '') {
			alert('Make sure the inputs are not empty');
		} else {
			await firebase.database().ref('notes/' + this.state.uid).push(note);
		}
	}

	onSubmit() {
		const note = {
			title: this.state.title,
			text: this.state.text,
			mood: this.state.currentMood,
			created_at: new Date().getTime(),
		};

		this.addNewNote(note);
		this.props.navigation.navigate('Home');
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<LinearGradient style={styles.header} colors={Moods[this.state.currentMood].color}>
					<TouchableHighlight onPress={() => this.props.navigation.goBack()}>
						<Ionicons name={'md-arrow-back'} size={32} color={Colors.white} />
					</TouchableHighlight>
					<Text weight='bold' style={{ color: Colors.white, fontSize: 24 }}>New Entry</Text>
				</LinearGradient>
				<TextInput
					style={styles.title}
					placeholder="Enter a title"
					onChangeText={title => this.setState({ title })}
				/>
				<TextInput
					style={styles.text}
					placeholder="What's the matter?"
					multiline={true}
					onChangeText={text => this.setState({ text })}
				/>
				{/* FIX ME: Offset buttons so checkmark is centered */}
				<View style={styles.buttonContainer}>
					<IconButton 
						icon={'md-camera'}
						size={24}
						color={Colors.white}
						onPress={() => this.props.navigation.navigate('CameraEntry')}
					/>
					<IconButton 
						icon={'md-checkmark'}
						size={32}
						color={Colors.white}
						onPress={this.onSubmit.bind(this)}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		height: 60,
		paddingHorizontal: 32,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light',
		fontSize: 28,
		fontWeight: 'bold',
		backgroundColor: '#eee',
	},
	text: {
		flex: 1,
		padding: 32,
		textAlignVertical: 'top',
		fontSize: 15,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: Colors.white
	},
	header: {
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 16,
	},
	buttonContainer: {
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
