import * as firebase from 'firebase';
import * as config from '../config/firebase.config.json';

export function initFirebase() {
	if (!config || !config.apiKey || config.apiKey === '<YOUR-API-KEY>') {
		throw new error(
			'Make sure your credentials in firebase.config.json are valid'
		);
	}
	console.log('Initializing firebase.');
	firebase.initializeApp(config);
}
