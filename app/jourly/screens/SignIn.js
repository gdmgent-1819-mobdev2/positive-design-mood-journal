import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Svg } from 'react-native';

import Colors from '../modules/Colors';
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
					<FormInput placeholder="Email" />
					<FormInput placeholder="Password" />
					{/* grad button: placeholder, onPress */}
					<GradientButton
						placeholder="Sign In"
						onPress={() => this.props.navigation.navigate('Home')}
					/>
					<GradientButton placeholder="Sign Up" />
				</View>
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
