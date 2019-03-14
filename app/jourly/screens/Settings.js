import React, { Component } from 'react';
import { View, Picker, TextInput, StyleSheet } from 'react-native';

// import this as component Text instead of Text component from 'react-native'
import Text from '../components/FiraText';

class Settings extends Component {
	state = {
		locationEnabled: false
	};
	render() {
		return (
			<View style={styles.container}>
				<Text weight={'bold'}>Settings</Text>
				<Picker
					selectedValue={this.state.locationEnabled}
					style={{ height: 50, width: 100 }}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ language: itemValue })
					}
				>
					<Picker.Item label="locationEnabled" value="Use my location" />
					<Picker.Item label="locationDisabled" value="Disable location" />
				</Picker>
			</View>
		);
	}
}

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center'
	}
});
