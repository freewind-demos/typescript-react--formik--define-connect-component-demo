import {Formik} from 'formik';
import React from 'react'
import ConnectedMyInput from "./ConnectedMyInput";
import {MyState} from "./MyState";

export function Hello() {
  const initValues: MyState = {
    state: {
      MyInput: 'Hello'
    }
  }

  return <Formik<MyState>
    onSubmit={() => undefined}
    initialValues={initValues}
    render={(props) => {
      return <>
        <ConnectedMyInput label='My input' statePath={'state.MyInput'}/>
        {JSON.stringify(props.values)}
      </>
    }}
  />
}

export default Hello;

