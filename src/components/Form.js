/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/04/01.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, {PropTypes} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default React.createClass({
  displayName: 'Form',

  childContextTypes: {
    update: PropTypes.func,
    reset: PropTypes.func,
    submit: PropTypes.func,
    values: PropTypes.object,
    muiTheme: React.PropTypes.object
  },

  getChildContext(){
    return {
      update: this.props.update,
      reset: this.props.reset,
      submit: this.props.submit,
      values: this.props.values,
      muiTheme: getMuiTheme()  
    }
  },

  propTypes: {
  	children: PropTypes.node,
  	values: PropTypes.object,
  	update: PropTypes.func,
  	reset: PropTypes.func,
  	onSubmit: PropTypes.func
  },

  render(){
  	return (
  	 <form>
  	 	{this.props.children}
  	 </form>
  	);
  }

});