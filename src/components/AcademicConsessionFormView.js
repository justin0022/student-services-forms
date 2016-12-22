import React, {PropTypes} from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { connect } from 'react-redux';
import StringInput from './StringInput';
import EmailInput from './EmailInput';
import StudentNumberInput from './StudentNumberInput';
import NumberOfCoursesToDisplay from './NumberOfCoursesToDisplay';
import RenderField from './RenderField';
import DropZone from 'react-dropzone';

let AcademicConsessionFormView = (props) => {
    const { handleSubmit, submitting, numberOfCoursesValue, hasMedicalReason, hasWrittenStatement, hasOtherReason, hasMedicalCertificate, hasMetWithAdvsior, hasNotMetWithAdvisor } = props;
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
                    <NumberOfCoursesToDisplay courseNumber={numberOfCoursesValue}/>
                </div>
            </div>
             <div className="row-fluid">
                <div className="span12">
                    <h3>My request is based on: </h3>
                    {!hasOtherReason && <div>
                        <Field name="medicalReason?"  component={RenderField} type="checkbox" label="Medical Reason" />
                    </div>}
                    {!hasMedicalReason && <div>
                        <Field name="otherReason?"  component={RenderField} type="checkbox" label="Other Reason" />
                        {hasOtherReason && <div>
                            <Field name="otherReason" component={RenderField} type="text" placeholder="Write Reason Here"/>
                        </div>}
                    </div>}
                    <h3>In support of my request, I'm submitting one of the following:</h3>
                    {!hasWrittenStatement && <div>
                        <Field name="medicalCertificate?" component={RenderField} type="checkbox" label="A medical certificate" />
                        {hasMedicalCertificate && <div>
                            <DropZone><p>Upload Files Here</p></DropZone>
                        </div>}
                    </div>}
                    {!hasMedicalCertificate && <div>
                        <Field name="writtenStatement?" component={RenderField} type="checkbox" label="Written Statement" />
                        {hasWrittenStatement && <div>
                            <Field name="writtenStatement" component={RenderField} type="text" placeholder="Write Statement Here" />
                        </div>}
                    </div>}
                    <h3>Have you previously met an Advisor?</h3>
                    {!hasNotMetWithAdvisor && <div>
                        <Field name="metWithAdvisorYes" component={RenderField} type="checkbox" label="Yes" />
                    </div>}
                    {!hasMetWithAdvsior && <div>
                        <Field name="metWithAdvisorNo" component={RenderField} type="checkbox" label="No" />
                    </div>}
                </div>
            </div>
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
            </div>
        </form>
        
    );
};

AcademicConsessionFormView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    numberOfCoursesValue: PropTypes.string,
    hasMedicalReason: PropTypes.bool,
    hasOtherReason: PropTypes.bool,
    hasMedicalCertificate: PropTypes.bool,
    hasWrittenStatement: PropTypes.bool,
    hasMetWithAdvsior: PropTypes.bool,
    hasNotMetWithAdvisor: PropTypes.bool
};

const selector = formValueSelector('AcademicConsessionFormView');
AcademicConsessionFormView = connect(
    state => {
        const numberOfCoursesValue = selector(state, 'numberOfCourses');
        const hasMedicalReason = selector(state, 'medicalReason?');
        const hasOtherReason = selector(state, 'otherReason?');
        const hasMedicalCertificate = selector(state, 'medicalCertificate?');
        const hasWrittenStatement = selector(state, 'writtenStatement?');
        const hasMetWithAdvsior = selector(state, 'metWithAdvisorYes');
        const hasNotMetWithAdvisor = selector(state, 'metWithAdvisorNo');
        return {
            numberOfCoursesValue,
            hasMedicalReason,
            hasWrittenStatement,
            hasOtherReason,
            hasMedicalCertificate,
            hasMetWithAdvsior,
            hasNotMetWithAdvisor
        };
    }
)(AcademicConsessionFormView);

export default reduxForm({
    form: 'AcademicConsessionFormView',
    destroyOnUnmount: false
})(AcademicConsessionFormView);
