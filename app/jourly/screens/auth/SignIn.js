import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	TextInput,
	Button,
	StyleSheet,
	Picker,
	TouchableOpacity
} from 'react-native';

import Colors from '../../modules/Colors';
import Text from '../../components/FiraText';
import FormInput from '../../components/FormInput';
import GradientButton from '../../components/GradientButton';
import firebase from 'firebase';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		}
	}

	async onLogIn() {
		console.log('Logging in user.');
		/* TODO: Navigate user back to home */
		await firebase.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => console.log('Logged in!'));
	}

	render() {
		return (
		    <KeyboardAvoidingView style={styles.container} behavior="padding">
				{/* TODO: add image */}
				<TextInput
					style={styles.input}
					placeholder="Email"
					onChangeText={email => this.setState({ email })}
				/>
				<TextInput
					secureTextEntry={true}
					style={styles.input}
					placeholder="Password"
					onChangeText={password => this.setState({ password })}
				/>
				<GradientButton 
					colors={[Colors.gradGreen1, Colors.gradGreen2]}
					startPos={[0, 1]}
					endPos={[1, 0]}
					text="Sign in"
					onPress={() => this.onLogIn()}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export default SignIn;

const styles = StyleSheet.create({
	input: {
		height: 60,
		paddingLeft: 25,
		margin: 10,
		borderRadius: 75,
		backgroundColor: Colors.lightGray,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light'
	},
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 10,
		backgroundColor: Colors.white,
	},
});
