import React from 'react';
import MUITextField from '@material-ui/core/TextField';

TextField.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: ''
    };
  }

  onTextFieldChanged() {
    return event => {
      this.setState({ textFieldValue: event.target.value });
    };
  }

  render() {
    return (
      <MUITextField
        {...this.props}
        value={this.state.textFieldValue}
        onChange={this.onTextFieldChanged()}
      >
        {this.props.children}
      </MUITextField>
    );
  }
}

export default TextField;
