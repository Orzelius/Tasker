import React, { } from 'react';
import { FieldProps } from 'formik';

interface Props {
  label: string;
}

const MyField: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & FieldProps & Props> =
  ({ label, placeholder, field, form, type }) => {
    return (
      <div className="input-field">
        <label htmlFor="userName">{label}</label>
        <input type={type} {...field} />
      </div>
    );
  };




export default MyField;
