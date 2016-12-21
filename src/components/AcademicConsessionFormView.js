import React, {PropTypes} from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { connect } from 'react-redux';
import StringInput from './StringInput';
import EmailInput from './EmailInput';
import StudentNumberInput from './StudentNumberInput';

let AcademicConsessionFormView = (props) => {
    const { handleSubmit, numberOfCoursesValue } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h1>Request for Academic Consession</h1>
            <div className="row-fluid">
                <div className="span6">
                    <StringInput name="firstName" label="First Name" placeholder="First Name"/>
                </div>
                <div className="span6">
                    <StringInput name="lastName" label="Last Name" placeholder="Last Name"/>
                </div>
            </div>
            <div className="row-fluid">
                <div className="span6">
                    <StudentNumberInput name="studentNumber" label="Student Number" placeholder="Student Number"/>
                </div>
            </div>
            <div className="row-fluid">
                <div className="span6">
                    <EmailInput name="email" label="Email" placeholder="Email"/>
                </div>
            </div>
            <div className="row-fluid">
                <div className="span6">
                    <label htmlFor="year">Year Level</label>
                    <div>
                        <Field name="yearLevel" component="select" className="input">
                            <option></option>
                            <option value="Year 1">Year 1</option>
                            <option value="Year 2">Year 2</option>
                            <option value="Year 3">Year 3</option>
                            <option value="Year 4">Year 4</option>
                        </Field>
                    </div>
                </div>
            </div>
            <div className="row-fluid">
                <div className="span6">
                    <label htmlFor="department">Department/Program (if applicable)</label>
                    <div>
                        <Field name="department" component="select" className="input">
                            <option></option>
                            <option value="APBI">APBI</option>
                            <option value="FNH">FNH</option>
                            <option value="GRS">GRS</option>
                        </Field>
                    </div>
                </div>
            </div>
            <div className="row-fluid">
                <div className="span6">
                    <label htmlFor="numberOfCourses">For how many courses do you need consession?</label>
                    <div>
                        <Field name="numberOfCourses" component="select" className="input">
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Field>
                    </div>
                </div>
                {numberOfCoursesValue && <div style={{
                    height: 80*numberOfCoursesValue,
                    width: 200,
                }}/>}
            </div>
        </form>
        
    );
};

AcademicConsessionFormView.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

const selector = formValueSelector('AcademicConsessionFormView');
AcademicConsessionFormView = connect(
    state => {
        const numberOfCoursesValue = selector(state, 'numberOfCourses');
        return {
            numberOfCoursesValue
        };
    }
)(AcademicConsessionFormView);

export default reduxForm({
    form: 'AcademicConsessionFormView',
    destroyOnUnmount: false
})(AcademicConsessionFormView);
