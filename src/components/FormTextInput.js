import React, {PropTypes} from 'react';

const FormTextInput = (props) => {
    const handleChange = (e) => {
        props.onChange(props.name, e.target.value);
    };

    return (
        <input 
            className="large"
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleChange}/>
    );
};

FormTextInput.PropTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default FormTextInput;