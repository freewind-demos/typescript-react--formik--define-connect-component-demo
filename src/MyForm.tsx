import React from 'react'
import {FormikProps, FormikActions, Form, Field, ErrorMessage, withFormik} from 'formik';
import Password from './Password';

export type LoginProps = {
  username: string,
  password: string,
}


export function MyForm(props: FormikProps<LoginProps>) {
  console.log('props', props);

  return <div>
    <h1>Hello Formik</h1>

    <Form>
      <div>
        <Field type="text" name='username'/>
        <ErrorMessage name="username" component="span"/>
      </div>
      <div>
        <Password/>
      </div>
      <div>
        <button>Login</button>
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
  console.log({values, actions});
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
