import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import TextInput from '../TextInput/TextInput';
import InputAdornment from '../Input/InputAdornment';
import IconButton from '../IconButton/IconButton';

export class PasswordInput extends Component {
  state = {
    showPassword: this.props.showPassword
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { props } = this;
    const { showPassword: showPasswordProp, ...textInputProps } = props;

    const { showPassword } = this.state;

    return (
      <TextInput
        {...textInputProps}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
        type={showPassword ? 'text' : 'password'}
      />
    );
  }
}

PasswordInput.propTypes = {
  showPassword: PropTypes.bool
};

PasswordInput.defaultProps = {
  showPassword: false
};

export default PasswordInput;
