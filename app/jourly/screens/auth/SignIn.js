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
import { LinearGradient } from 'expo';
import Text from '../../components/FiraText';
import FormInput from '../../components/FormInput';
import GradientButton from '../../components/GradientButton';

class SignIn extends Component {
	render() {
		return (
		    <KeyboardAvoidingView style={styles.container} behavior="padding">
				{/* TODO: add image */}
				<TextInput
					style={styles.input}
					placeholder="Email"
					onChangeText={text => this.setState({ email })}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					onChangeText={text => this.setState({ password })}
				/>
				<GradientButton 
					colors={[Colors.gradGreen1, Colors.gradGreen2]}
					startPos={[0, 1]}
					endPos={[1, 0]}
					text="Sign in"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				{/* TODO: add Sign Up button */}
			</KeyboardAvoidingView>
		);
	}
}

export default SignIn;

const styles = StyleSheet.create({
	btn: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		borderRadius: 75,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnText: {
		color: Colors.white
	},
	input: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
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
		backgroundColor: Colors.white,
		alignItems: 'stretch',
		justifyContent: 'center'
	}
});
