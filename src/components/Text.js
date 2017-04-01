import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import * as validators from '../validators';

export default React.createClass({

	displayName: 'Text',

	propTypes: {
		name: PropTypes.string.isRequired,
		placeholder: PropTypes.string,
		label: PropTypes.string
	},

	contextTypes: {
		update: PropTypes.func.isRequired,
		values: PropTypes.object.isRequired
	},	

	updateValue(value){
		this.context.update(this.props.name, value);

		if (this.state.errors.length){
			setTimeout(()=> this.isValid(true), 0); //TODO: Why do we need setTimeout here?
		}
	},

	onChange(event){
		this.updateValue(event.target.value);
	},

	getDefaultProps(){
		return {
			validate: []
		}
	},

	getInitialState(){
		return {
			errors: []
		}
	},

	isValid(showErrors){
		const errors = this.props.validate
			.reduce((memo, currentName) => 
				memo.concat(validators[currentName](
					this.context.values[this.props.name])), []);

		if (showErrors){
			this.setState({
				errors
			});
		}

		return !errors.length;
	},

	onBlur(){
		this.isValid(true);
	},

	render(){
		return (
			<div>
				<TextField
					hintText={this.props.placeholder}
					floatingLabelText={this.props.label}
					value={this.context.values[this.props.name]}
					onChange={this.onChange}
					onBlur={this.onBlur}
					errorText={this.state.errors.length ? (
						<div>
							{this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
						</div>
						): null}
					/>
			</div>
			);
	}

});