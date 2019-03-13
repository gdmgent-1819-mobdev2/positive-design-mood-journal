import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FiraText extends Component {
	setFontWeight = weight => {
		switch (weight) {
			case 'bold':
				return 'fira-sans-bold';
			case 'light':
				return 'fira-sans-light';
			default:
				return 'fira-sans';
		}
	};
	render() {
		const font = this.setFontWeight(
			this.props.type ? this.props.type : 'normal'
		);
		const style = [{ fontFamily: font }, this.props.style || {}];
		const allProps = Object.assign({}, this.props, { style: style });
		return <Text {...allProps}>{this.props.children}</Text>;
	}
}
export default FiraText;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
