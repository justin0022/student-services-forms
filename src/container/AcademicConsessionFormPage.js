import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AcademicConsessionFormView from '../components/AcademicConsessionFormView';
import * as actions from '../reducers/academicConsessionFormReducer';

export const AcademicConsessionFormPage = (props) => {
    return (
        <AcademicConsessionFormView 
            saveForm={props.saveForm}
            validateEmail={props.actions.validateEmail}
            formData={props.formData}   
        />
    );
};

AcademicConsessionFormPage.PropTypes = {
    actions: PropTypes.object.isRequired,
    saveForm: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        formData: state.formData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AcademicConsessionFormPage);