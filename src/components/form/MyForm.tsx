import React from 'react';
import { Formik, Form, Field } from 'formik';
import MyField from './MyField';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers/rootReducer';
import { AsyncActionStatus } from '../../store/types/models';

interface Values {
  userName: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const MyForm: React.FC<Props> = ({ onSubmit }) => {
  const isFetching = useSelector((state: AppState) => state.auth.status);

  let button: JSX.Element;
  if (isFetching === AsyncActionStatus.STARTED) {
    button = (
      <div className="preloader-wrapper small active" style={{width: "26px",
        height: "26px"}}>
        <div className="spinner-layer spinner-white">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  } else {
    button = <div>Login</div>
  }


  return (
    <div>
      <Formik initialValues={{ userName: '', password: '' }}
        onSubmit={values => { onSubmit(values) }}>
        {() => (
          <Form>
            <Field name="userName" placeholder="UserName" type="text" label="UserName" component={MyField}></Field>
            <Field name="password" placeholder="" type="password" label="Password" component={MyField}></Field>
            <div className="input-field">
              <button style={{padding: 2, width: "5em"}} className="btn pink lighten-1" type="submit">{button}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
