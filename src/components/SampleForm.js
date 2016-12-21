import React from 'react';
import {Field, reduxForm} from 'redux-form';

class SampleForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h1>Sample Form</h1>
                <div>
                    <label htmlFor="sampleFormName">Sample Form Name</label>
                    <Field name="sampleFormName" component="input" type="text"/>
                </div>
            </form>
        );
    }
}

SampleForm = reduxForm({
    form: 'SampleForm',
    destroyOnUnmount: false
})(SampleForm);

export default SampleForm;
