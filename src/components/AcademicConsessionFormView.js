import React from 'react'
import {Field, reduxForm} from 'redux-form'
import RenderField from './RenderField'
import * as validate from '../constants/Validate'

const AcademicConsessionFormView = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h1>Request for Academic Consession</h1>
            <div className="row-fluid">
                <div className="span6">
                    <Field name="firstName" type="text" component={RenderField} label="First Name"/>
                    <Field name="username" type="text"
                        component={RenderField} label="Username"
                        validate={[ validate.required, validate.maxLength15 ]}
                    />
                </div>
                <div className="span6">
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" placeholder="Last Name" className="input"/>
                </div>
            </div>
            <div className="row-fluid">
                <div className="span6">
                    <label htmlFor="studentNumber">Student Number</label>
                    <Field name="studentNumber" component="input" type="text" placeholder="Student Number" className="input"/>
                </div>
            </div>
            <div className="row-fluid">
                <div className="span6">
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text" placeholder="Email" className="input"/>
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
            </div>
        </form>
        
    )
}

export default reduxForm({
    form: 'AcademicConsessionFormView',
    destroyOnUnmount: false
})(AcademicConsessionFormView);
