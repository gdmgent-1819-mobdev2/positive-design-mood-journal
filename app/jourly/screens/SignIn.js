import React, { Component } from 'react';
<<<<<<< HEAD
import {
	KeyboardAvoidingView,
	TextInput,
	Button,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';

import Colors from '../modules/Colors';
import { LinearGradient } from 'expo';
import Text from '../components/FiraText';
import FormInput from '../components/FormInput';
=======
import { View, KeyboardAvoidingView, StyleSheet, Svg } from 'react-native';

import Colors from '../modules/Colors';
import Logo from '../components/Logo';
import FormInput from '../components/FormInput';
import GradientButton from '../components/GradientButton';
>>>>>>> 1dda839f9bc7a1fe597fd3e50e0a1c874b46a95b

class SignIn extends Component {
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
<<<<<<< HEAD
				{/* TODO: add image */}
				<FormInput />
				<FormInput />
				{/* <TextInput
					style={styles.input}
					placeholder="Email"
					onChangeText={text => this.setState({ email })}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					onChangeText={text => this.setState({ password })}
				/> */}
				<TouchableWithoutFeedback
					onPress={() => this.props.navigation.navigate('Home')}
				>
					<LinearGradient
						style={styles.btn}
						colors={[Colors.gradGreen1, Colors.gradGreen2]}
						start={[0, 1]}
						end={[1, 0]}
					>
						<Text style={styles.btnText} weight={'bold'}>
							Sign In
						</Text>
						{/* <Button
							title="Sign In"
							onPress={() => this.props.navigation.navigate('Home')}
						/> */}
					</LinearGradient>
				</TouchableWithoutFeedback>
				<Button
					color={Colors.darkGray}
					title="Sign Up"
					onPress={() => this.props.navigation.navigate('SignUp')}
				/>
=======
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
					<GradientButton
						placeholder="Sign Up"
						onPress={() => this.props.navigation.navigate('SignUp')}
					>
						{' '}
					</GradientButton>
					/>
				</View>
>>>>>>> 1dda839f9bc7a1fe597fd3e50e0a1c874b46a95b
			</KeyboardAvoidingView>
		);
	}
}

export default SignIn;

const styles = StyleSheet.create({
<<<<<<< HEAD
	btn: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		borderRadius: 75,
		justifyContent: 'center'
	},
	btnText: {
		color: Colors.white
	},
	input: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
=======
	input: {
		padding: 20,
		flex: 1 / 24,
>>>>>>> 1dda839f9bc7a1fe597fd3e50e0a1c874b46a95b
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
<<<<<<< HEAD
		backgroundColor: Colors.white,
		alignItems: 'stretch',
		justifyContent: 'center'
=======
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
>>>>>>> 1dda839f9bc7a1fe597fd3e50e0a1c874b46a95b
	}
});
