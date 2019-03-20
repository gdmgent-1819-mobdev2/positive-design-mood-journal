import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Colors from '../modules/Colors'

class FormInput extends Component {
	props = {
		placeholder: ''
	}
	state = {
		isFocused: false
	}
	handleFocus = e => {
		this.setState({ isFocused: true })
		if (this.props.onFocus) {
			this.props.onFocus(e)
		}
	}

	handleBlur = e => {
		this.setState({ isFocused: false })
		if (this.props.onBlur) {
			this.props.onBlur(e)
		}
	}
	render() {
		const { isFocused } = this.state;
		const { onFocus, onBlur, ...otherProps } = this.props;
		return (
			<TextInput
				style={styles.textInput}
				selectionColor={Colors.gradGreen1}
				underlineColorAndroid={isFocused ? Colors.gradGreen2 : Colors.white}
				onFocus={this.handleFocus}
				onBlur={this.handleBlur}
				{...otherProps}
			/>
		)
	}
}

export default FormInput;

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		flexDirection: 'row',
		borderRadius: 75,
		backgroundColor: Colors.lightGray,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light'
	}
});
