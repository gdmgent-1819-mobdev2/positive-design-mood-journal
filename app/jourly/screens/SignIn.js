import React, { Component } from 'react';
import {
	View,
	KeyboardAvoidingView,
	TextInput,
	Button,
	StyleSheet,
	TouchableWithoutFeedback,
	Svg
} from 'react-native';

import Colors from '../modules/Colors';
import { LinearGradient } from 'expo';
import Text from '../components/FiraText';
import Logo from '../components/Logo';
import FormInput from '../components/FormInput';
import GradientButton from '../components/GradientButton';

class SignIn extends Component {
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.logoContainer}>
					<Logo />
				</View>
				<View style={styles.formGroup}>
					<FormInput />
					<FormInput />
					<GradientButton />
				</View>
				{/* TODO: add Sign Up button */}
			</KeyboardAvoidingView>
		);
	}
}

export default SignIn;

const styles = StyleSheet.create({
	input: {
		padding: 20,
		flex: 1 / 24,
		flexDirection: 'row',
		borderRadius: 75,
		backgroundColor: Colors.lightGray,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light'
	},
	container: {
		flex: 1,
		margin: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: Colors.white
	},
	logoContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	formGroup: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'stretch'
	}
});
