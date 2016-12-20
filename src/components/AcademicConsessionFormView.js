import React, {PropTypes} from 'react';
import FormTextInput from './FormTextInput';

class AcademicConsessionFormView extends React.Component {
    constructor(props, context) {
        super (props, context);
        this.save = this.save.bind(this);
    }

    saveForm() {
        this.props.formData(this.props.formData);
    }

    validateEmail(name, value) {
        this.props.formData(this.props.formData, name, value);
    }

    render() {
        const {formData} = this.props;

        return (
            <div>
                <div>
                    <h1>Request for Academic Consession</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><FormTextInput onChange={this.writeValue} placeholder="First Name" name="FirstName" value={formData.academicConsessionForm.firstName} /></td>
                            <td><FormTextInput placeholder="Last Name"/></td>
                        </tr>
                        <tr>
                            <td><FormTextInput placeholder="Student Number"/></td>
                        </tr>
                        <tr>
                            <td><FormTextInput placeholder="Email"/></td>
                        </tr>
                        <tr>
                            <td><FormTextInput placeholder="Phone"/></td>
                        </tr>
                        <tr>
                            <td>
                                <select className="span6" name="Year Level">
                                    <option value="1">Year Level: 1</option>
                                    <option value="2">Year Level: 2</option>
                                    <option value="3">Year Level: 3</option>
                                    <option value="4">Year Level: 4</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select className="span6" name="Department">
                                    <option value="1">Department: 1</option>
                                    <option value="1">Department: 2</option>
                                    <option value="1">Department: 3</option>
                                    <option value="1">Department: 4</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }      
}

AcademicConsessionFormView.PropTypes = {
    saveForm: PropTypes.func.isRequired,
    validateEmail: PropTypes.func.isRequired
}

export default AcademicConsessionFormView;