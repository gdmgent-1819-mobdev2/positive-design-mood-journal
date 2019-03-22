// journal entry optional third screen
//  add an image to your journal entry
import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Camera, Permissions } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Text from '../components/FiraText';
import IconButton from '../components/IconButton';
import Colors from '../modules/Colors';

export default class JournalImageEntry extends Component {
	state = {
		hasPermission: null,
		type: Camera.Constants.Type.back
	}

	async componentWillMount() {
		/* If user hasn't given their permission, ask them and set status to granted */
		if(!this.checkCameraPermissions()) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA);
			this.setState({ hasPermission: status === 'granted' });
		} else {
			this.setState({ hasPermission: 'granted' });
		}
	}

	/* Check if user already gave permission */
	async checkCameraPermissions() {
		const { status } = await Permissions.getAsync(Permissions.CAMERA);

		if (status !== 'granted') {
			return false;
		}
	}

	/* TODO: Move image using Expo.FileSystem to permanent storage */
	async takePicture() {
		if (this.camera) {
			const photo = await this.camera.takePictureAsync().then(
				/* Storage logic */
			);

			console.log(photo);
		}
		this.props.navigation.goBack();
	}

	/* Toggle camera between back and front */
	switchCamera() {
		const toggleType = this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back;
		this.setState({ type: toggleType });
	}

	// TODO: 
	// take picture works BUT picture is stored in iOS/Android cache -> move image with Expo.FileSystem to permanently store on phone
	// choose picture from gallery --> ask permissions for camera roll with Permissions.CAMERA_ROLL
	// add shadow / background opacity behind icons to make them more clear
	render() {
		const { hasPermission } = this.state;
		if (hasPermission === null) {
			return  <Text weight='bold'>Permissions set to null</Text>
		} else if (hasPermission === false) {
			return <Text weight='bold'>No access to camera</Text>
		} else {
			return (
				<View style={styles.container}>
					<Camera style={styles.camera} type={this.state.type} ref={ref => { this.camera = ref; }}>
						<View style={styles.topButtons}>
							<TouchableWithoutFeedback style={styles.iconShadow} onPress={() => this.props.navigation.goBack()}>
								<Ionicons name='md-close' size={32} color={Colors.white}  />
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback style={styles.iconShadow} onPress={this.switchCamera.bind(this)}>
								<Ionicons name='md-reverse-camera' size={32} color={Colors.white}/>
							</TouchableWithoutFeedback>
						</View>
						<View style={styles.bottomButtons}>
							<IconButton
								icon={'md-image'}
								size={24}
								color={Colors.white}
							/>
							<IconButton
								icon={'md-camera'}
								size={32}
								color={Colors.white}
								onPress={this.takePicture.bind(this)}
							/>
						</View>
					</Camera>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
		justifyContent: 'space-between',
	},
	topButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 32, 
	},
	bottomButtons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 32, 
	},
	iconShadow: {
		backgroundColor: 'red',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 10,
	}
});