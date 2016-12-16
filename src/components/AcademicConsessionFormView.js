import React, {PropTypes} from 'react';
import FormTextInput from './FormTextInput';

class AcademicConsessionFormView extends React.Component {
    constructor(props, context) {
        super (props, context);
        this.save = this.save.bind(this);
    }

    save() {
        
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Request for Academic Consession</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><FormTextInput /></td>
                            <td><FormTextInput /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }      
}

export default AcademicConsessionFormView;