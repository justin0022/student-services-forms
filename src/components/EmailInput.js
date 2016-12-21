import React, {PropTypes} from 'react';
import {Field} from 'redux-form';
import * as validate from '../constants/Validate';
import RenderField from './RenderField';

const EmailInput = (props) => (
    <Field name="email" type="email" component={RenderField} label="Email" validate={[validate.email, validate.required]}/>
);

export default EmailInput;