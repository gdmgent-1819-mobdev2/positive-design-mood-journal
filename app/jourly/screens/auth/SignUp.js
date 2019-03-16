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

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
            password: '',
            passwordRepeat: '',
		}
	}

	async onSignUp() {
		const { email, password, passwordRepeat } = this.state;

		if (password !== passwordRepeat) {
			console.log('Error: Password does not match.');
		} else {
			await firebase.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(() => this.props.navigation.navigate('Home'))
				.catch((err) => console.log(err));
		}	
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
				<TextInput
					secureTextEntry={true}
					style={styles.input}
					placeholder="Repeat Password"
					onChangeText={passwordRepeat => this.setState({ passwordRepeat })}
				/>
				<GradientButton 
					colors={[Colors.gradGreen1, Colors.gradGreen2]}
					startPos={[0, 1]}
					endPos={[1, 0]}
					text="Sign in"
					onPress={() => this.onSubmit()}
				/>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
					<Text style={{textAlign: 'center'}}>Sign In</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

export default SignUp;

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
