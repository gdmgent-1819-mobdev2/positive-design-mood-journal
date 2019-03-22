// journal entry second screen
//  write a note for your journal entry
//  add image button
import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Text,
	View
} from 'react-native';
import IconButton from '../components/IconButton';
import Colors from '../modules/Colors';

export default class JournalNoteEntry extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			text: '',
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
					onChangeText={title => this.setState({ title })}
				/>
				{/* input field for the message of your mood*/}
				<TextInput
					style={styles.text}
					placeholder="What's the matter?"
					multiline={true}
					onChangeText={text => this.setState({ text })}
				/>
				{/* button to save the message of the mood */}
				{/* FIX ME: Offset buttons so checkmark is centered */}
				<View style={styles.buttonContainer}>
					<IconButton 
						icon={'md-camera'}
						size={24}
						color={Colors.white}
					/>
					<IconButton 
						icon={'md-checkmark'}
						size={32}
						color={Colors.white}
						onPress={() => this.props.navigation.navigate('Home')}
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
	buttonContainer: {
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
