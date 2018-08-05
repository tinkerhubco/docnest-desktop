// @flow
import React from 'react';
import MUIButton from '@material-ui/core/Button';

import type { Button as MUIButtonProps } from '@material-ui/core';

export type ButtonProps = MUIButtonProps;

export const Button = (props: ButtonProps) => (
  <MUIButton {...props}>{props.children}</MUIButton>
);

export default Button;
