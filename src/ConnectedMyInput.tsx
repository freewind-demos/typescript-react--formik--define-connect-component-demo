import React from 'react';
import {connect, FormikContext, getIn} from 'formik';

type OuterProps = {
  label: string,
  statePath: string,
}

interface FormikPartProps {
  formik: FormikContext<any>;
}

type Props = OuterProps & FormikPartProps;

export function ConnectedMyInput({label, formik, statePath}: Props) {
  const {values: formikValues, setFieldValue} = formik;

  const stateValue: string = getIn(formikValues, statePath) || '';

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setFieldValue(statePath, inputValue);
  }

  return <>
    {label}
    <input value={stateValue} onChange={onChange}/>
  </>
}

export default connect<OuterProps>(ConnectedMyInput)
