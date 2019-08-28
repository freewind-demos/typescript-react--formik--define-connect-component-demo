import {Field, ErrorMessage, FormikProps, connect, FormikContext} from 'formik';
import React from 'react';
import {LoginProps} from './MyForm';

function generatePassword(form: FormikProps<LoginProps>) {
  form.setFieldValue('password', '123456');
}

function Password(props: { formik: FormikContext<LoginProps> }) {
  console.log('Password.props', props);
  const {formik} = props;
  return <div>
    <label>Password:
      <Field type='password' name='password'/>
    </label>
    <button type='button' onClick={() => generatePassword(formik)}>Generate Password</button>
    <ErrorMessage name="password" component="span"/>
  </div>
}

export default connect<{}, LoginProps>(Password)
