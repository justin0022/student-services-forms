import React from 'react';
import {Field, reduxForm} from 'redux-form';

class AcademicConsessionFormView extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h1>Request for Academic Consession</h1>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"/>
                </div>
            </form>
            
        );
    }
}

AcademicConsessionFormView = reduxForm({
    form: 'AcademicConsessionFormView'
})(AcademicConsessionFormView);

export default AcademicConsessionFormView;