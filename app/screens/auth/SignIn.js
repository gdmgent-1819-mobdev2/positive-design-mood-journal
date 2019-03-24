import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	StyleSheet,
	TouchableOpacity,
	View
} from 'react-native';
import firebase from 'firebase';

import Colors from '../../modules/Colors';

import Text from '../../components/FiraText';
import FormInput from '../../components/FormInput';
import GradientButton from '../../components/GradientButton';
import Logo from '../../components/Logo';


class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	async onSignIn() {
		const { email, password } = this.state;

		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			//if succesfull register, the user will be redirected to the home page
			.then(() => this.props.navigation.navigate('Home'))
			//every error is shown to the user through an alert
			.catch(err => alert(err));
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.imageContainer}>
					<Logo />
				</View>
				<FormInput
					placeholder="Email"
					onChangeText={email => this.setState({ email })}
				/>
				<FormInput
					secureTextEntry={true}
					placeholder="Password"
					onChangeText={password => this.setState({ password })}
				/>
				<GradientButton
					colors={Colors.gradientGreen}
					startPos={[0, 1]}
					endPos={[1, 0]}
					text="LOG IN"
					textStyle={{ color: Colors.white }}
					onPress={() => this.onSignIn()}
				/>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('SignUp')}
				>
					<Text style={{ textAlign: 'center' }}>Register</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

export default SignIn;

const styles = StyleSheet.create({
	imageContainer: {
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 16
	},
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 16,
		backgroundColor: Colors.white
	}
});
