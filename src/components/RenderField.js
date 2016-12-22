import React, {PropTypes} from 'react';

const RenderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label><input {...input} placeholder={placeholder} type={type} className="input"/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default RenderField;