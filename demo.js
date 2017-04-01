import React from 'react';
import ReactDOM from 'react-dom';
import Form , { Text } from './src/index';

ReactDOM.render(
	<Form>
		<Text name="name"
		validate={['required']}
		placeholder="Type your name here"
		label="Your name" />
		<Text name="email"
		validate={['required', 'email']}
		placeholder="Type your email here"
		label="Your email" />
		<Text name="website"
		validate={['url']}
		placeholder="Type your website url here"
		label="Your website url" />
	</Form>, document.getElementById('container'));


