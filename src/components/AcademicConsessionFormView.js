import React from 'react';
import {Field, reduxForm} from 'redux-form';


class AcademicConsessionFormView extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h1>Request for Academic Consession</h1>
                <div className="row-fluid">
                    <div className="span6">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text" placeholder="First Name" className="input"/>
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
                            <Field name="yearLevel" component={select}>
                                <option></option>
                                <option value="Year 1">Year 1</option>
                                <option value="Year 2">Year 2</option>
                                <option value="Year 3">Year 3</option>
                                <option value="Year 4">Year 4</option>
                            </Field>
                        </div>
                    </div>
                </div>
            </form>
            
        );
    }
}

AcademicConsessionFormView = reduxForm({
    form: 'AcademicConsessionFormView',
    destroyOnUnmount: false
})(AcademicConsessionFormView);

export default AcademicConsessionFormView;