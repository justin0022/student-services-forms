import React, {PropTypes} from 'react';
import {Field} from 'redux-form';
import * as validate from '../constants/Validate';
import RenderField from './RenderField';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

let startDate = Moment();

const CourseInput = (props) => (
    <div>
        <h3>{props.label}</h3>
        <Field name={props.name} type="text" component={RenderField} label="Course and Section" validate={[ validate.required ]}/>
        <Field name={props.instructorName} type="text" component={RenderField} label="Instructor Name" validate={[ validate.required ]}/>
        <label>Exam Date</label>
        <DatePicker name="examDate" selected={startDate} />
        <Field name={props.workOutstanding} type="text" component={RenderField} label="Work Outstanding" validate={[ validate.required ]}/>
    </div>
);

CourseInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    instructorName: PropTypes.string.isRequired,
    workOutstanding: PropTypes.string.isRequired
};

export default CourseInput;