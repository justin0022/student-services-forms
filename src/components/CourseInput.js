import React from 'react';
import {Field} from 'redux-form';
import * as validate from '../constants/Validate';
import RenderField from './RenderField';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

let startDate = Moment();

const CourseInput = () => (
    <div>
        <Field name="courseAndSection" type="text" component={RenderField} label="Course and Section" validate={[ validate.required ]}/>
        <Field name="instructorName" type="text" component={RenderField} label="Instructor Name" validate={[ validate.required ]}/>
        <label>Exam Date</label>
        <DatePicker name="examDate" selected={startDate} />
    </div>
);

export default CourseInput;