import React, {PropTypes} from 'react';
import {Field} from 'redux-form';
import * as validate from '../constants/Validate';
import RenderField from './RenderField';

const StudentNumberInput = (props) => (
    <Field name={props.name} type="text" component={RenderField} label={props.label} placeholder={props.placeholder} validate={[ validate.required, validate.studentnum, validate.number ]}/>
);

StudentNumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default StudentNumberInput;