import React, { Component } from 'react'
import {
	KeyboardAvoidingView,
	TextInput,
	Button,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';

import Colors from '../modules/Colors'
import { LinearGradient } from 'expo'
import Text from '../components/FiraText'
import FormInput from '../components/FormInput'

class SignUp extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
				<FormInput />
				<FormInput />
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
                <TextInput
					style={styles.input}
					placeholder="Repeat Password"
					onChangeText={text => this.setState({ password })}
				/>
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
							Sign Up
						</Text>
						{/* <Button
							title="Sign Up"
							onPress={() => this.props.navigation.navigate('Home')}
						/> */}
					</LinearGradient>
				</TouchableWithoutFeedback>
				<Button
					color={Colors.darkGray}
					title="Sign In"
					onPress={() => this.props.navigation.navigate('SignIn')}
				/>
			</KeyboardAvoidingView>
        )
    }
}

export default SignUp

const styles = StyleSheet.create({
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
})