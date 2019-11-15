import React from 'react'
import {FormikProps, FormikActions, Form, Field, ErrorMessage, withFormik} from 'formik';
import Password from './Password';
import MyConnectedCustomComponent from 'freewind--custom-form-component-demo';

export type LoginProps = {
  username: string,
  password: string
}

function CustomComponent() {
  return <MyConnectedCustomComponent dataProps={
    {
      legend: 'MyLegend', options: [
        {value: '111', label: '111'},
        {value: '222', label: '222'},
        {value: '333', label: '333'},
      ]
    }
  } stateConfig={
    {statePath: 'custom-component'}
  }/>
}

export function MyForm(props: FormikProps<LoginProps>) {
  console.log('props', props);

  return <div>
    <h1>Hello Formik</h1>
    <CustomComponent/>
    <Form>
      <div>
        <Field type="text" name='username'/>
        <ErrorMessage name="username" component="span"/>
      </div>
      <div>
        <Password/>
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </Form>
  </div>
}

function validate(values: LoginProps) {
  const errors: Partial<LoginProps> = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
}

function handleSubmit(values: LoginProps, actions: FormikActions<LoginProps>) {
  console.log('> handleSubmit', {values, actions});
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false)
}

export default withFormik<{}, LoginProps>({
  mapPropsToValues: () => ({
    username: 'aaa',
    password: ''
  }),
  validate,
  handleSubmit,
})(MyForm)
