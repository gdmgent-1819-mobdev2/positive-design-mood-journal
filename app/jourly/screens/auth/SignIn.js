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

	async onSignIn() {
		const { email, password } = this.state;

		await firebase.auth()
			.signInWithEmailAndPassword(email, password)
			//if succesfull register, the user will be redirected to the home page
			.then(() => this.props.navigation.navigate('Home'))
			//every error is shown to the user through an alert
			.catch((err) => alert(err));
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
					onPress={() => this.onSignIn()}
				/>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
					<Text style={{textAlign: 'center'}}>Register</Text>
				</TouchableOpacity>
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
