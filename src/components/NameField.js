import React from 'react';
import {Field} from 'redux-form';
import * as validate from '../constants/Validate';
import RenderField from './RenderField';

const NameField = (props) => (
    <Field name={props.name} type="text" component={RenderField} label={props.label} placeholder={props.placeholder} validate={[ validate.required ]}/>
);
        
export default NameField;