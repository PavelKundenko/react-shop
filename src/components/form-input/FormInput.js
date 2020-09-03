import React from "react";
import {FormGroup, InputStyled} from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps}) => (
  <FormGroup>
    <InputStyled onChange={handleChange} {...otherProps}/>
    {
      label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
    }
  </FormGroup>
);

export default FormInput;
